class Position {
  private rank: number;
  private file: string;
  private positionIndex: number[];

  constructor(rank: number, file: string, positionIndex: number[]) {
    this.rank = rank;
    this.file = file;
    this.positionIndex = positionIndex;
  }

  public getRank(): number {
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
