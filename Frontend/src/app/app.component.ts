import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
      default:
        break;
    }
  }
}
