import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IconService } from './shared/icon-service';
import { MobileNavService } from './shared/mobile-nav/mobile-nav-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
  public innerWidth = 0;
  public opened = false;

  @ViewChild('mobileNav')
  mobileNav!: MatSidenav;

  constructor(private mobileNavService: MobileNavService, iconService: IconService) {
    iconService.registerIcons();
  }

  ngOnInit(): void {
    this.onResize();
  }

  ngAfterViewInit(): void {
    this.mobileNavService.setMobileNav(this.mobileNav);
  }

  @HostListener('window:resize', [])
  onResize(): void {
    if (window.innerWidth >= 768) {
      this.opened = false;
    }
  }

  onClick(event: Event): void {
    if (this.opened &&
      (event.target as HTMLElement).getAttribute('has-children') === null &&
      (event.target as HTMLElement).parentElement?.getAttribute('has-children') === null) {
        this.opened = false;
    }
  }
}
