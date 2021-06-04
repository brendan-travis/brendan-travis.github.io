import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogIndexComponent } from './blog-index/blog-index.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

const routes: Routes = [
  { path: 'blog', component: BlogIndexComponent },
  { path: 'blog/:blog-name', component: BlogViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
