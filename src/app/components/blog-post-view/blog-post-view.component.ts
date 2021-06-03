import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html'
})
export class BlogPostViewComponent implements OnInit, OnDestroy {

  private sub: Subscription | undefined;

  post: string | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.post = './assets/blog/' +  params['blog-name'] + '.md';
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
