import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { CrossfitComponent } from './crossfit/crossfit.component';
import { NewsComponent } from './news/news.component';
import { PodcastComponent } from './podcast/podcast.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: ''        , component: HomeComponent     },
  { path: 'articles', component: ArticlesComponent },
  { path: 'crossfit', component: CrossfitComponent },
  { path: 'news'    , component: NewsComponent     },
  { path: 'podcast' , component: PodcastComponent  },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
