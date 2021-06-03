import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

interface BlogMetaData {
  id: string;
  title: string;
  description: string;
  date: Date;
  author: string;
  image: string;
}

const blogs: BlogMetaData[] = [
  {
    id: 'adding-a-markdown-blog-to-an-angular-site-using-ngx-markdown',
    title: 'Adding a Markdown Blog to an Angular Site using NGX Markdown',
    description: 'Blogs are great! Having to create new Angular components every time you want to post is not. Let me show you a way of using markdown to quickly add a blog to your Angular project.',
    date: new Date('2021-06-03'),
    author: 'Brendan Travis',
    image: 'assets/images/blog/adding-a-markdown-blog-to-an-angular-site-using-ngx-markdown_700x394.jpg'
  }];

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html'
})
export class BlogPostViewComponent implements OnInit, OnDestroy {
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
      const blog = blogs.find(x => x.id === blogName);

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
