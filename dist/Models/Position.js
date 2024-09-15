class Position {
    rank;
    file;
    constructor(rank, file) {
        this.rank = rank;
        this.file = file;
    }
    getRank() {
        return this.rank;
    }
    getFile() {
        return this.file;
    }
}
export default Position;
