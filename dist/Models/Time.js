class Time {
    hours;
    minutes;
    seconds;
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    getTimeString() {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    }
    getHours() {
        return this.hours;
    }
    getMinutes() {
        return this.minutes;
    }
    getSeconds() {
        return this.seconds;
    }
}
export default Time;
