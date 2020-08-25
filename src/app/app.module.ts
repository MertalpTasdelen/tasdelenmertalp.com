import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsComponent } from './news/news.component';
import { ProjectsComponent } from './projects/projects.component';
import { ArticlesComponent } from './articles/articles.component';
import { PodcastComponent } from './podcast/podcast.component';
import { CrossfitComponent } from './crossfit/crossfit.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './news/posts/posts.component';
import { MasterComponent } from './master/master.component';

const appRoutes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'crossfit', component: CrossfitComponent },
  { path: 'news'    , component: NewsComponent     },
  { path: 'podcast' , component: PodcastComponent  },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewsComponent,
    ProjectsComponent,
    ArticlesComponent,
    PodcastComponent,
    CrossfitComponent,
    UserComponent,
    PostsComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
