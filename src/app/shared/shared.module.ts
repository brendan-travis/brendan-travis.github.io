import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { IconService } from './icon-service';
import { MobileNavService } from './mobile-nav/mobile-nav-service';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    FooterComponent,
    MobileNavComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    FooterComponent,
    MobileNavComponent,
    NavBarComponent,
  ],
  providers: [
    MobileNavService,
    IconService
  ]
})
export class SharedModule { }
