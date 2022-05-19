import { Component, OnInit } from '@angular/core';
import { AuthorSource } from './core/author/author.source';
import { ArticleSource } from './core/article/article.source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'simple-app'

  constructor (private authorSource: AuthorSource, private articleSource: ArticleSource ) { }

  ngOnInit() {
    this.authorSource.preload().subscribe();
    this.articleSource.preload().subscribe();
  }
  
}
