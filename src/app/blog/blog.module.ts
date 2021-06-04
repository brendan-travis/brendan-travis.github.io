import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { MarkdownModule } from 'ngx-markdown';
import { MatIconModule } from '@angular/material/icon';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [
    BlogIndexComponent,
    BlogViewComponent,
  ],
  imports: [
    MatIconModule,
    BlogRoutingModule,
    CommonModule,
    MarkdownModule.forChild()
  ]
})
export class BlogModule { }
