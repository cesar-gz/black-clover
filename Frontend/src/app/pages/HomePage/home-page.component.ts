import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page0',
  templateUrl: './home-page.component.html',
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
