![Adding a Markdown Blog to an Angular Site using NGX Markdown](assets/images/blog/adding-a-markdown-blog-to-an-angular-site-using-ngx-markdown_700x394.jpg "Adding a Markdown Blog to an Angular Site using NGX Markdown")
# Adding a Markdown Blog to an Angular Site using NGX Markdown
Brendan Travis • Thursday, June 3, 2021

---
For this to work, we are going to use a small library built for Angular that transforms markdown into HTML: [ngx-markdown](https://www.npmjs.com/package/ngx-markdown).

## Add the package
The first step is to add the library to your project.

<p class='pre-filepath'></p>

```
npm install ngx-markdown
```

## Import the module
Next, you will need to import the module into your main application module file.

We will also import the HTTP client and pass this into the markdown module loader parameter.
This will be useful later on when we use the `[src]` attribute to load in the markdown.

<p class='pre-filepath'>./src/app/app.module.ts</p>

```typescript
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

...

imports: [
  HttpClientModule,
  MarkdownModule.forRoot({ loader: HttpClient })
]
```

## Add the blog files
Now, you need to add the folder structure to host the blog files themselves.
The file names will be used as part of the routing later on so make sure they
are relevant.

I like to use the title of the blog as the file names and keep them in one
folder but you could separate them by dates or use other naming conventions.

Create a blog folder underneath the assets folder and add your first `md` file.

<p class='pre-filepath'></p>

```
src
|_assets
  |_blog
    |_my-first-blog.md

```

## Create viewer component

We are now going to add the component that will be used to display the blogs.
This will be where the rendered HTML will be output so you can wrap this with some
CSS that will format it nicely but for this example, we are simply going to output
our markdown file.

Start by creating a new component and put the following div in the HTML.
This will render a markdown file from the specific file path in the `[src]` attribute.

<p class='pre-filepath'>./src/app/blog-view/blog-view.component.html</p>

```html
<div markdown [src]='post'></div>
```

## Add the activated route subscription

To use the routing to choose which blog to display, we are going to make use
of the activated route from the Angular router.

In the `ngOnInit` method, we subscribe to the route, passing the route parameters into
the `post` property on the component. We wrap this with the necessary file path so
the route ends up being the filename without the file path. For example, `my-first-blog`
would point to `./assets/blog/my-first-blog.md`.

<p class='pre-filepath'>./src/app/blog-view/blog-view.component.ts</p>

```
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html'
})
export class BlogViewComponent implements OnInit {
  post: string | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.post = `./assets/blog/${params['blog-name']}.md`;
    });
  }
}
```

## Setup routing

Now we need to add the route to the Angular router.
The `:blog-name` portion of the path, notes the parameter that we referenced
in the `blog-view-component.ts`.

<p class='pre-filepath'>./src/app/app-routing.module.ts</p>

```
{ path: 'blog/:blog-name', component: BlogPostViewComponent },
```


## Link to the article using router link

Now everything is set up, you should be able to use a normal router link
passing in the path `/blog` and the parameter of your markdown filename.

<p class='pre-filepath'></p>

```
<a [routerLink]="['/blog', 'my-first-blog']">My First Blog</a>
```

And that's it!

This is a basic implementation but it is a good starting point to move forward
with [ngx-markdown](https://www.npmjs.com/package/ngx-markdown). There are several additional plugins/features included with [ngx-markdown](https://www.npmjs.com/package/ngx-markdown)
so it's worth taking a look and trying some out.

---

Package versions at the time of writing:

<p class='pre-filepath'></p>

```
ngx-markdown: 12.0.1
angular: 12.0.1
rxjs: 6.6.0
```
