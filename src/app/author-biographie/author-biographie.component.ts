import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../models/author';
import { AuthorSource } from '../core/author/author.source';
import { Article } from '../models/article';
import { ArticleSource } from '../core/article/article.source';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-biographie',
  templateUrl: './author-biographie.component.html',
})
export class AuthorBiographieComponent implements OnInit {
  @Input()
  author: Author;

  articles: Article[];

  constructor(
    private authorSource: AuthorSource,
    private articleSource: ArticleSource,
    private route: ActivatedRoute
  ) {}

  loadBio() {
    this.route.params.subscribe((params) => {
      const name = params['name'];
      this.authorSource.getAuthor(name).subscribe((it) => (this.author = it));
    });
  }
  loadBiblio() {
    this.route.params.subscribe((params) => {
      const name = params['name'];
      this.articleSource.getArticlesOfAuthor(name).subscribe((it) => (this.articles = it));
    });
  }

  ngOnInit() {
    this.loadBiblio();
    this.loadBio();
  }

  deleteArticle(article: Article) {
    this.articleSource.deleteArticle(article).subscribe(() => this.loadBiblio());
  }
}
