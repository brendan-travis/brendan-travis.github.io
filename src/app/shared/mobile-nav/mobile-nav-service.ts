import { Injectable } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class MobileNavService {
  private navigation!: MatSidenav;

  setMobileNav(navigation: MatSidenav): void {
    this.navigation = navigation;
  }

  open(): Promise<MatDrawerToggleResult> {
    return this.navigation.open();
  }

  close(): Promise<MatDrawerToggleResult> {
    return this.navigation.close();
  }

  toggle(): Promise<MatDrawerToggleResult> {
    return this.navigation.toggle();
  }
}
