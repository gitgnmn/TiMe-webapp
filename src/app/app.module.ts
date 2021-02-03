import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClockDetailsComponent } from './clock-details/clock-details.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClockDetailsComponent,
    TopBarComponent,
    SidemenuComponent,
    BottomBarComponent
  ],
  imports: [
    BrowserModule,
    //NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }