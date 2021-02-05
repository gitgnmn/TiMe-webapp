import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClockService } from '../clock.service';
import { timerModel } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  timers = [];

  newTimerForm = this.formBuilder.group({
    name: '',
    goal: 0,
    startNow: false,
  })

  toggleHomeView(){
    timerModel.toggleHomeView();
  }

  playTimer(timerId: number) {
    timerModel.playTimer(timerId);
  }
  /*playTimer(timerId: number) {
    let timer = this.timers.find(timer => {
      return timer.id === timerId;
    })
    timer.running = true;

    // Adds 1 min to timer each min :)
    increment(timer);
  } */ 


  pauseTimer(timerId: number) {
    timerModel.pauseTimer(timerId);
  }
  /*pauseTimer(timerId: number) {
    let timer = this.timers.find(timer => {
      return timer.id === timerId;
    })
    timer.running = false;
  }*/

  onSubmit(): void {
    var idNew: number = this.timers.length +1;

    var newTimer = {
      id: idNew,
      name: this.newTimerForm.value["name"],
      goal: this.newTimerForm.value["goal"],
      running: this.newTimerForm.value["startNow"],
      current: 0,
      advance: 0,
      sessions: []
    }

    if(newTimer.goal < 0){
      newTimer.goal = newTimer.goal * -1;
      console.log("Turned goal into a positive! Don't allow user to input negative numbers later on");
    }

    timerModel.timers.push(newTimer);
    if(newTimer.running)
      timerModel.playTimer(newTimer.id);
    //console.log(timerModel.timers);
    this.clockService.addTimer(newTimer);
  }

  constructor(
    private formBuilder: FormBuilder,
    private clockService: ClockService,
  ) { 
    this.timers = clockService.getTimers();
  }

    ngOnInit() {

    }

}
