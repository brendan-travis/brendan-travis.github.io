import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { B_ICON, GITHUB_ICON, LINKED_IN_ICON } from './icons.model';

@Injectable()
export class IconService {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
  }

  registerIcons(): void {
    this.iconRegistry.addSvgIconLiteral('github', this.sanitizer.bypassSecurityTrustHtml(GITHUB_ICON));
    this.iconRegistry.addSvgIconLiteral('linkedin', this.sanitizer.bypassSecurityTrustHtml(LINKED_IN_ICON));
    this.iconRegistry.addSvgIconLiteral('b', this.sanitizer.bypassSecurityTrustHtml(B_ICON));
  }
}
