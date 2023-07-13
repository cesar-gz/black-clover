import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/HomePage/home-page.component';
import { Page1Component } from './pages/Newsletter/page1.component';
import { Page2Component } from './pages/Email/page2.component';
import { Page3Component } from './pages/TBD/page3.component';
import { Page4Component } from './pages/Trader/page4.component';
import { Page5Component } from './pages/Music/page5.component';
import { Page6Component } from './pages/About/page6.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
