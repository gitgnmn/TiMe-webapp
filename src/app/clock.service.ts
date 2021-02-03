import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  timers = [];

  addTimer(timer) {
    this.timers.push(timer);
  }

  getTimers() {
    return this.timers;
  }

  deleteTimer(timerId: number) {
    this.timers.splice(timerId, 1)
  }

  playTimer(timerId: number) {
    this.timers[timerId]
  }

  constructor() { }
}
