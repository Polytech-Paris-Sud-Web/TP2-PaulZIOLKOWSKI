import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleSource } from '../core/article/article.source';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
})
export class ArticlesComponent implements OnInit {
  searchText: String;

  articles: Article[];

  constructor(private articleSource: ArticleSource) {
    this.articles = [];
  }

  delete(article: Article) {
    this.articleSource.deleteArticle(article).subscribe(() => this.getArticles());
  }

  getArticles() {
    this.articleSource.getLastsArticles().subscribe((it) => {
      this.articles = it;
    });
  }

  ngOnInit() {
    this.getArticles();
  }
}
