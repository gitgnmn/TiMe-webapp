import { Component, OnInit } from '@angular/core';
import { timers } from '../timers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  timers = timers;

  addTimer() {

  }

  playTimer(timerId: number) {

  }  
  
  pauseTimer(timerId: number) {

  }



}
