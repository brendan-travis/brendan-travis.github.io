import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html'
})
export class BlogPostViewComponent implements OnInit {
  post: string | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.post = `./assets/blog/${params['blog-name']}.md`;
    });
  }
}
