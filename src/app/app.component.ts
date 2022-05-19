import { Component, OnInit } from '@angular/core';
import { AuthorSource } from './core/author/author.source';
import { ArticleSource } from './core/article/article.source';
import {environment} from '../environments/environment';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'simple-app'
  public appVersion: string;

  constructor (private authorSource: AuthorSource, private articleSource: ArticleSource, private metaTagService: Meta ) { }

  ngOnInit() {
    this.authorSource.preload().subscribe();
    this.articleSource.preload().subscribe();
    this.appVersion = environment.appVersion;
    
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Simple PWA',
      },
      {
        name: 'description',
        content: 'Simple PWA using Angular !',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Paul ZIOLKOWSKI' },
      { charset: 'UTF-8' },
    ]);
  }
  
}
