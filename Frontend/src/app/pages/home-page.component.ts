import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page0',
  template: `
    <h1>Home page</h1>
    <div class="ground">
      <div id="clover" (click)="handleLeafClick(6)">
        <div class="leaf"></div>
        <div class="leaf"></div>
        <div class="leaf"></div>
        <div class="leaf"></div>
        <div class="leaf"></div>
        <div class="star">
          <div class="star-inner"></div>
        </div>
      </div>

      <div class="relative-container">
        <img src="../assets/images/wizardking.png" alt="King" id="leaf1" (click)="handleLeafClick(1)">
        <img src="../assets/images/yami.png" alt="Yami" id="leaf2" (click)="handleLeafClick(2)">
        <img src="../assets/images/yuno.png" alt="Yuno" id="leaf3" (click)="handleLeafClick(3)">
        <img src="../assets/images/liebe.png" alt="Liebe" id="leaf4" (click)="handleLeafClick(4)">
        <img src="../assets/images/asta.png" alt="Asta" id="leaf5" (click)="handleLeafClick(5)">
      </div>
    </div>
  `,
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router: Router) { }

  handleLeafClick(leafNumber: number): void {
    // Redirect to a different page based on the clicked leaf
    switch (leafNumber) {
      case 1:
        this.router.navigate(['/page1']);
        break;
      case 2:
        this.router.navigate(['/page2']);
        break;
      case 3:
        this.router.navigate(['/page3']);
        break;
      case 4:
        this.router.navigate(['/page4']);
        break;
      case 5:
        this.router.navigate(['/page5']);
        break;
      case 6:
        this.router.navigate(['/page6']);
        break;
      default:
        break;
    }
  }
}
