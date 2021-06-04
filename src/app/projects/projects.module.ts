import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ProjectsComponent } from './projects.component';
import { GithubIoComponent } from './github-io/github-io.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    GithubIoComponent,
  ],
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
