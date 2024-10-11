import Time from "./Time.js";

class TimeControl {
  private time: Time;
  private increment: number;

  constructor(time: Time, increment: number) {
    this.time = time;
    this.increment = increment;
  }

  public getTime(): Time {
    return this.time;
  }

  public getIncrement(): number {
    return this.increment;
  }
}

export default TimeControl;

export const presetTimeConrols = new Map([
  ["1+0", new TimeControl(new Time(0, 1, 0), 0)],
  ["2+1", new TimeControl(new Time(0, 2, 0), 1)],
  ["3+0", new TimeControl(new Time(0, 3, 0), 0)],
  ["3+2", new TimeControl(new Time(0, 3, 0), 2)],
  ["5+0", new TimeControl(new Time(0, 5, 0), 0)],
  ["5+3", new TimeControl(new Time(0, 5, 0), 3)],
  ["10+0", new TimeControl(new Time(0, 10, 0), 0)],
  ["10+5", new TimeControl(new Time(0, 10, 0), 5)],
  ["15+10", new TimeControl(new Time(0, 15, 0), 10)],
  ["30+0", new TimeControl(new Time(0, 30, 0), 0)],
  ["30+20", new TimeControl(new Time(0, 30, 0), 20)],
]);
