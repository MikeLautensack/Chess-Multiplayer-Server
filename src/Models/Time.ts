class Time {
  private hours: number;
  private minutes: number;
  private seconds: number;

  constructor(hours: number, minutes: number, seconds: number) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  public startTick(): void {}

  public stopTick(): void {}

  public getTimeString(): string {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }

  public getHours(): number {
    return this.hours;
  }

  public getMinutes(): number {
    return this.minutes;
  }

  public getSeconds(): number {
    return this.seconds;
  }
}
