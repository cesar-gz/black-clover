import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/HomePage/home-page.component';
import { Page1Component } from './pages/Newsletter/page1.component';
import { Page2Component } from './pages/Email/page2.component';
import { Page3Component } from './pages/TBD/page3.component';
import { Page4Component } from './pages/Trader/page4.component';
import { Page5Component } from './pages/Music/page5.component';
import { Page6Component } from './pages/About/page6.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component },
  { path: 'page5', component: Page5Component },
  { path: 'page6', component: Page6Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
