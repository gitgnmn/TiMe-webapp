import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClockService } from '../clock.service';
import { timers } from '../timers';

@Component({
  selector: 'app-clock-details',
  templateUrl: './clock-details.component.html',
  styleUrls: ['./clock-details.component.css']
})
export class ClockDetailsComponent implements OnInit {

  timer;



  constructor(
    private route: ActivatedRoute,
    private clockService: ClockService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const timerIdFromRoute = Number(routeParams.get('timerId'));

    this.timer = timers.find(timer => timer.id ===timerIdFromRoute);
  }

  

}
