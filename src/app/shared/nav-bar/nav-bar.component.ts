import { Component } from '@angular/core';
import { MobileNavService } from '../mobile-nav/mobile-nav-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  constructor(private mobileNavService: MobileNavService) { }

  toggleMobileNav(): void {
    this.mobileNavService.toggle();
  }
}
