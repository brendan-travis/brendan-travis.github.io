import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  showScrollToTop = false;

  @HostListener('window:scroll', [])
  updateScrollToTopVisibility(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showScrollToTop = true;
    } else {
      this.showScrollToTop = false;
    }
  }

  scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.scrollTop = 0;
  }

  ngOnInit(): void {
    this.updateScrollToTopVisibility();
  }
}
