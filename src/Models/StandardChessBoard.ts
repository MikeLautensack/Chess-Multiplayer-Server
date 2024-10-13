import Bishop from "./Bishop.js";
import Board from "./Board.js";
import King from "./King.js";
import Knight from "./Knight.js";
import Pawn from "./Pawn.js";
import Piece from "./Piece.js";
import Pin from "./Pin.js";
import Position from "./Position.js";
import Queen from "./Queen.js";
import Rook from "./Rook.js";
import Square from "./Square.js";

class StandardChessBoard extends Board {
  private squares: Square[][] = Array(8)
    .fill(null)
    .map(() => Array(8));
  private pins: Map<number, Pin> = new Map([]);

  constructor() {
    super();
    this.initSquares();
    this.setupBoard();
  }

  public initSquares(): void {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const position = new Position(ranks.get(i)!, files.get(j)!, [i, j]);
        this.squares[i][j] = new Square(
          i + j,
          position,
          false,
          (i + j) % 0 ? "light" : "dark",
          this
        );
      }
    }
  }

  public setupBoard(): void {
    for (let i = 0; i < this.squares.length; i++) {
      for (let j = 0; j < this.squares[i].length; j++) {
        let square = this.squares[i][j];
        let file = square.getPosition().getFile();
        let rank = square.getPosition().getRank();

        if (rank === 8) {
          switch (file) {
            case "a":
              this.squares[i][j].setPiece(
                new Rook(i + j, square.getPosition(), "black")
              );
              break;
            case "b":
              this.squares[i][j].setPiece(
                new Knight(i + j, square.getPosition(), "black")
              );
              break;
            case "c":
              this.squares[i][j].setPiece(
                new Bishop(i + j, square.getPosition(), "black")
              );
              break;
            case "d":
              this.squares[i][j].setPiece(
                new Queen(i + j, square.getPosition(), "black")
              );
              break;
            case "e":
              this.squares[i][j].setPiece(
                new King(i + j, square.getPosition(), "black")
              );
              break;
            case "f":
              this.squares[i][j].setPiece(
                new Bishop(i + j, square.getPosition(), "black")
              );
              break;
            case "g":
              this.squares[i][j].setPiece(
                new Knight(i + j, square.getPosition(), "black")
              );
              break;
            case "h":
              this.squares[i][j].setPiece(
                new Rook(i + j, square.getPosition(), "black")
              );
              break;
          }
          this.squares[i][j].setIsOccupied(true);
        }

        if (rank === 7) {
          this.squares[i][j].setPiece(
            new Pawn(i + j, square.getPosition(), "black")
          );
          this.squares[i][j].setIsOccupied(true);
        }

        if (rank === 2) {
          this.squares[i][j].setPiece(
            new Pawn(i + j, square.getPosition(), "white")
          );
          this.squares[i][j].setIsOccupied(true);
        }

        if (rank === 1) {
          switch (file) {
            case "a":
              this.squares[i][j].setPiece(
                new Rook(i + j, square.getPosition(), "white")
              );
              break;
            case "b":
              this.squares[i][j].setPiece(
                new Knight(i + j, square.getPosition(), "white")
              );
              break;
            case "c":
              this.squares[i][j].setPiece(
                new Bishop(i + j, square.getPosition(), "white")
              );
              break;
            case "d":
              this.squares[i][j].setPiece(
                new Queen(i + j, square.getPosition(), "white")
              );
              break;
            case "e":
              this.squares[i][j].setPiece(
                new King(i + j, square.getPosition(), "white")
              );
              break;
            case "f":
              this.squares[i][j].setPiece(
                new Bishop(i + j, square.getPosition(), "white")
              );
              break;
            case "g":
              this.squares[i][j].setPiece(
                new Knight(i + j, square.getPosition(), "white")
              );
              break;
            case "h":
              this.squares[i][j].setPiece(
                new Rook(i + j, square.getPosition(), "white")
              );
              break;
          }
          this.squares[i][j].setIsOccupied(true);
        }
      }
    }
  }

  public calcControlAndPins(): void {}

  public getSquares(): Square[][] {
    return this.squares;
  }

  public getSquare(position: Position): Square | undefined {
    const squares = this.squares;
    for (let i = 0; i < squares.length; i++) {
      for (let j = 0; j < squares[i].length; j++) {
        const square = squares[i][j];
        const file = position.getFile();
        const rank = position.getRank();
        const squareFile = square.getPosition().getFile();
        const squareRank = square.getPosition().getRank();
        const compareFile = file === squareFile;
        const compareRank = rank === squareRank;
        if (compareFile && compareRank) {
          return square;
        }
      }
    }
  }

  // Print the board to the console
  public printBoard(): void {
    console.log(` ________________________`);
    let rank = 8;
    for (let i = 0; i < 8; i++) {
      let squareArr = [];
      const board = this.getSquares();
      for (let file = 0; file < 8; file++) {
        const isOccupied = board[i][file].getIsOccupied();
        // console.log(board[i][file].getPiece());
        if (isOccupied) {
          squareArr.push(board[i][file].getPiece()!.getPieceStr());
        } else {
          squareArr.push("__");
        }
      }
      console.log(
        `${rank}|${squareArr[0]}|${squareArr[1]}|${squareArr[2]}|${squareArr[3]}|${squareArr[4]}|${squareArr[5]}|${squareArr[6]}|${squareArr[7]}|`
      );
      rank--;
    }
    console.log(`  A  B  C  D  E  F  G  H `);
  }
}

export default StandardChessBoard;

export const ranks = new Map([
  [0, 8],
  [1, 7],
  [2, 6],
  [3, 5],
  [4, 4],
  [5, 3],
  [6, 2],
  [7, 1],
]);

export const files = new Map([
  [0, "a"],
  [1, "b"],
  [2, "c"],
  [3, "d"],
  [4, "e"],
  [5, "f"],
  [6, "g"],
  [7, "h"],
]);

export const startingPositions = new Map([
  ["a8", { pieceColor: "black", pieceType: "BR" }],
  ["b8", { pieceColor: "black", pieceType: "BN" }],
  ["c8", { pieceColor: "black", pieceType: "BB" }],
  ["d8", { pieceColor: "black", pieceType: "BQ" }],
  ["e8", { pieceColor: "black", pieceType: "BK" }],
  ["f8", { pieceColor: "black", pieceType: "BB" }],
  ["g8", { pieceColor: "black", pieceType: "BN" }],
  ["h8", { pieceColor: "black", pieceType: "BR" }],
  ["a7", { pieceColor: "black", pieceType: "BP" }],
  ["b7", { pieceColor: "black", pieceType: "BP" }],
  ["c7", { pieceColor: "black", pieceType: "BP" }],
  ["d7", { pieceColor: "black", pieceType: "BP" }],
  ["e7", { pieceColor: "black", pieceType: "BP" }],
  ["f7", { pieceColor: "black", pieceType: "BP" }],
  ["g7", { pieceColor: "black", pieceType: "BP" }],
  ["h7", { pieceColor: "black", pieceType: "BP" }],
  ["a2", { pieceColor: "white", pieceType: "WP" }],
  ["b2", { pieceColor: "white", pieceType: "WP" }],
  ["c2", { pieceColor: "white", pieceType: "WP" }],
  ["d2", { pieceColor: "white", pieceType: "WP" }],
  ["e2", { pieceColor: "white", pieceType: "WP" }],
  ["f2", { pieceColor: "white", pieceType: "WP" }],
  ["g2", { pieceColor: "white", pieceType: "WP" }],
  ["h2", { pieceColor: "white", pieceType: "WP" }],
  ["a1", { pieceColor: "white", pieceType: "WR" }],
  ["b1", { pieceColor: "white", pieceType: "WN" }],
  ["c1", { pieceColor: "white", pieceType: "WB" }],
  ["d1", { pieceColor: "white", pieceType: "WQ" }],
  ["e1", { pieceColor: "white", pieceType: "WK" }],
  ["f1", { pieceColor: "white", pieceType: "WB" }],
  ["g1", { pieceColor: "white", pieceType: "WN" }],
  ["h1", { pieceColor: "white", pieceType: "WR" }],
]);

const checkForPin = (
  squares: Square[][],
  piecePos: Position,
  dir: string
): Pin | undefined => {
  return undefined;
};
