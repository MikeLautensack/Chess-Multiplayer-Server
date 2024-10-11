import Time from "./Time.js";
import TimeControl from "./TimeControl.js";

class Clock {
  private increment: number;
  private whiteTime: Time;
  private blackTime: Time;

  constructor(timeControl: TimeControl) {
    this.increment = timeControl.getIncrement();
    this.whiteTime = timeControl.getTime();
    this.blackTime = timeControl.getTime();
  }

  public getIncrement(): number {
    return this.increment;
  }

  public getWhiteTime(): Time {
    return this.whiteTime;
  }

  public getBlackTime(): Time {
    return this.blackTime;
  }
}

export default Clock;
