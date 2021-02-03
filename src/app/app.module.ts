import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClockDetailsComponent } from './clock-details/clock-details.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClockService } from './clock.service';
import { SettingsComponent } from './settings/settings.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClockDetailsComponent,
    TopBarComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'timers/:timerId', component: ClockDetailsComponent},
      { path: 'settings', component: SettingsComponent},
    ]),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    })
  ],
  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
