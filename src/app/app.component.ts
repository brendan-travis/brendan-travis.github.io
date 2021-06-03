import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MobileNavService } from './services/mobile-nav-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
  public innerWidth: number = 0;
  public opened: boolean = false;

  @ViewChild('mobileNav')
  mobileNav!: MatSidenav;

  constructor(private mobileNavService: MobileNavService) {
  }

  ngOnInit(): void {
    this.onResize();
  }

  ngAfterViewInit(): void {
    this.mobileNavService.setMobileNav(this.mobileNav);
  }

  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth >= 768) {
      this.opened = false;
    };
  }

  onClick(event: Event) {
    if (this.opened &&
      (event.target as HTMLElement).getAttribute('has-children') === null &&
      (event.target as HTMLElement).parentElement?.getAttribute('has-children') === null) {
        this.opened = false;
    }
  }
}
