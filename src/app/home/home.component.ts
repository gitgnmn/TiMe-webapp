import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClockService } from '../clock.service';

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


  playTimer(timerId: number) {

  }  
  
  pauseTimer(timerId: number) {

  }

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

    //this.timers.push(newTimer);
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
