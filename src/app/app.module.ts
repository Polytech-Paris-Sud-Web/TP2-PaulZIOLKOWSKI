import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

import { ArticleSource} from "./core/article/article.source";
import { ArticleHttpRestSource } from './core/article/article-http-rest-source.service';

import { AuthorBiographieComponent } from './author-biographie/author-biographie.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorComponent } from './author/author.component';
import { AuthorSource} from "./core/author/author.source";

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthorHttpRestSource } from './core/author/author-http-rest-source.service';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: '', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'author/:name', component: AuthorBiographieComponent },
  { path: 'authors', component: AuthorListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    FilterPipe,
    ArticleDetailsComponent,
    AuthorBiographieComponent,
    AuthorListComponent,
    AuthorComponent,
    ArticlesListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {
        provide: ArticleSource, 
        useFactory: (httpClient : HttpClient) => {
          return new ArticleHttpRestSource(httpClient);
        }, 
        deps: [HttpClient]
    
    },
    {
        provide: AuthorSource, 
        useFactory: (httpClient: HttpClient) => {
          return new AuthorHttpRestSource(httpClient);
        }, 
        deps: [HttpClient]
    
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
