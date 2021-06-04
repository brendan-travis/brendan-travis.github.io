import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubIoComponent } from './github-io/github-io.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'github-io' },
    { path: 'github-io', component: GithubIoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
