import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-side-nav',
  templateUrl: './projects-side-nav.component.html'
})
export class ProjectsSideNavComponent implements OnInit {
  showScrollToTop: boolean = false;

  @HostListener('window:scroll', [])
  updateScrollToTopVisibility() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showScrollToTop = true;
    } else {
      this.showScrollToTop = false;
    }
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.scrollTop = 0;
  }

  ngOnInit(): void {
    this.updateScrollToTopVisibility;
  }
}
