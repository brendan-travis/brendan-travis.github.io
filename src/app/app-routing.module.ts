import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsSideNavComponent } from './components/projects-side-nav/projects-side-nav.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubIoComponent } from './pages/projects/github-io/github-io.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'projects', component: ProjectsSideNavComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'github-io' },
    { path: 'github-io', component: GithubIoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
