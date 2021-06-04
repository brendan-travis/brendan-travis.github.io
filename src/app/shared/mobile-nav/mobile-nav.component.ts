import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html'
})
export class MobileNavComponent {
  @ViewChild('projects')
  projects!: ElementRef;

  toggleProjects(): void {
    if (this.projects.nativeElement.style.maxHeight){
      this.projects.nativeElement.style.maxHeight = null;
    } else {
      this.projects.nativeElement.style.maxHeight = this.projects.nativeElement.scrollHeight + 'px';
    }
  }

}
