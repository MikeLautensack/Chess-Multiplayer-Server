class Position {
  private rank: string;
  private file: string;

  constructor(rank: string, file: string) {
    this.rank = rank;
    this.file = file;
  }

  public getRank(): string {
    return this.rank;
  }

  public getFile(): string {
    return this.file;
  }
}

export default Position;
