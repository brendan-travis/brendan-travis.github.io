import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-side-nav',
  templateUrl: './projects-side-nav.component.html',
  host: {
    class: 'height-100'
  }
})
export class ProjectsSideNavComponent implements OnInit {
  public innerWidth: number = 0;
  public opened: boolean = false;

  public get mode() {
    if (this.innerWidth >= 768) {
      this.opened = true;
      return "side"
    } else {
      this.opened = false;
      return "over"
    }
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', [])
  public onResize() {
    this.innerWidth = window.innerWidth;
  }
}
