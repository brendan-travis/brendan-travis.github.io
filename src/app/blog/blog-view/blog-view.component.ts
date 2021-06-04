import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BLOGS } from '../shared/blogs';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html'
})
export class BlogViewComponent implements OnInit, OnDestroy {
  post: string | undefined;

  private originalTitle: string;
  private originalTitleTag: string;
  private originalDescription: string;
  private originalImage: string;

  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {
    this.originalTitle = title.getTitle();
    this.originalTitleTag = meta.getTag('property="og:title"')?.content ?? '';
    this.originalDescription = meta.getTag('property="og:description"')?.content ?? '';
    this.originalImage = meta.getTag('property="og:image"')?.content ?? '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const blogName = params['blog-name'];
      const blog = BLOGS.find(x => x.id === blogName);

      this.post = `./assets/blog/${blogName}.md`;
      this.title.setTitle(blog?.title ?? this.originalTitle);
      this.meta.updateTag({ property: 'og:title', content: blog?.title ?? this.originalTitle });
      this.meta.updateTag({ property: 'og:description', content: blog?.description ?? this.originalDescription });
      this.meta.updateTag({ property: 'og:image', content: blog?.image ?? this.originalImage });
    });
  }

  ngOnDestroy(): void {
    this.title.setTitle(this.originalTitle);
    this.meta.updateTag({ property: 'og:title', content: this.originalTitleTag });
    this.meta.updateTag({ property: 'og:description', content: this.originalDescription });
    this.meta.updateTag({ property: 'og:image', content: this.originalImage });
  }
}
