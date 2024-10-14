import Game, { Result } from "./Game.js";
import Player from "./Player.js";
import StandardChessBoard from "./StandardChessBoard.js";

class StandardChess extends Game {
  private board: StandardChessBoard = new StandardChessBoard();

  constructor(whitePlayer: Player, blackPlayer: Player) {
    super(whitePlayer, blackPlayer);
  }

  public getBoard(): StandardChessBoard {
    return this.board;
  }

  public startGame(): void {}

  public makeMove(): void {}

  public endGame(): void {
    throw new Error("Method not implemented.");
  }

  public printGame(): void {
    // Data
    const id = this.gameId;
    const whitePlayer = this.whitePlayer;
    const blackPlayer = this.blackPlayer;
    const moves = this.moves;
    // Print
    console.clear();
    console.log(`Game ID: ${id}`);
    console.log("_______________________________");
    console.log();
    console.log(`Playing White: ${whitePlayer.getUsername()}`);
    console.log(`Playing Black: ${blackPlayer.getUsername()}`);
    console.log();
    console.log(` | White | Black |`);
    moves.forEach((moves: string[], moveNumber: number) => {
      console.log(`${moveNumber}| ${moves[0]}  | ${moves[1]}  |`);
    });
    console.log();
    this.board.printBoard();
  }
}

export default StandardChess;
