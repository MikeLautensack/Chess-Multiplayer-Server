class Position {
    rank;
    file;
    positionIndex;
    constructor(rank, file, positionIndex) {
        this.rank = rank;
        this.file = file;
        this.positionIndex = positionIndex;
    }
    getRank() {
        return this.rank;
    }
    getFile() {
        return this.file;
    }
    getPositionIndex() {
        return this.positionIndex;
    }
}
export default Position;
