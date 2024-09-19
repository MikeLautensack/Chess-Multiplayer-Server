class Position {
  private rank: string;
  private file: string;
  private positionIndex: number[];

  constructor(rank: string, file: string, positionIndex: number[]) {
    this.rank = rank;
    this.file = file;
    this.positionIndex = positionIndex;
  }

  public getRank(): string {
    return this.rank;
  }

  public getFile(): string {
    return this.file;
  }

  public getPositionIndex(): number[] {
    return this.positionIndex;
  }
}

export default Position;
