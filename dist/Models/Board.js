import { v4 as uuidv4 } from "uuid";
class Board {
    boardId;
    constructor() {
        this.boardId = uuidv4();
    }
    getBoardId() {
        return this.boardId;
    }
}
export default Board;
