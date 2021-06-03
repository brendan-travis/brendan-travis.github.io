import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsSideNavComponent } from './components/projects-side-nav/projects-side-nav.component';
import { GithubIoComponent } from './pages/projects/github-io/github-io.component';
import { BlogPostViewComponent } from './components/blog-post-view/blog-post-view.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MobileNavService } from './services/mobile-nav-service';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BlogComponent,
    HomeComponent,
    HeroComponent,
    FooterComponent,
    ProjectsSideNavComponent,
    GithubIoComponent,
    BlogPostViewComponent,
    MobileNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [MobileNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
