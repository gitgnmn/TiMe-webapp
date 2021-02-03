import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClockService } from '../clock.service';
import { timers } from '../timers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  timers = timers;

  newTimerForm = this.formBuilder.group({
    name: '',
    goal: 0,
    startNow: false,
  })


  addTimer() {
    
  }

  playTimer(timerId: number) {

  }  
  
  pauseTimer(timerId: number) {

  }

  onSubmit(): void {
    var idNew: number = timers.length +1;

    var newTimer = {
      id: idNew,
      name: this.newTimerForm.value["name"],
      goal: this.newTimerForm.value["goal"],
      running: this.newTimerForm.value["startNow"],
      current: 0,
      advance: 0,
      sessions: []
    }

    this.timers.push(newTimer);
  }

  constructor(
    private formBuilder: FormBuilder,
    private clockService: ClockService,
  ) { }

    ngOnInit() {

    }

}
