class Clock {
    increment;
    whiteTime;
    blackTime;
    constructor(timeControl) {
        this.increment = timeControl.getIncrement();
        this.whiteTime = timeControl.getTime();
        this.blackTime = timeControl.getTime();
    }
    getIncrement() {
        return this.increment;
    }
    getWhiteTime() {
        return this.whiteTime;
    }
    getBlackTime() {
        return this.blackTime;
    }
}
export default Clock;
