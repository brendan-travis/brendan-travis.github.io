import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { BlogModule } from './blog/blog.module';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    MatSidenavModule,
    BlogModule,
    ProjectsModule,
    SharedModule,
    HomeModule
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }]
})
export class AppModule { }
