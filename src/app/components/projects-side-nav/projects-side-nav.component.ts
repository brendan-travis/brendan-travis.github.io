import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-side-nav',
  templateUrl: './projects-side-nav.component.html'
})
export class ProjectsSideNavComponent implements OnInit {
  public innerWidth: number = 0;
  public opened: boolean = false;
  public showScrollToTop: boolean = false;

  public get mode() {
    if (this.innerWidth >= 768) {
      this.opened = true;
      return "side"
    } else {
      this.opened = false;
      return "over"
    }
  }

  @HostListener('window:scroll', [])
  public updateScrollToTopVisibility() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showScrollToTop = true;
    } else {
      this.showScrollToTop = false;
    }
  }

  @HostListener('window:resize', [])
  public onResize() {
    this.innerWidth = window.innerWidth;
  }

  public scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.updateScrollToTopVisibility;
  }
}
