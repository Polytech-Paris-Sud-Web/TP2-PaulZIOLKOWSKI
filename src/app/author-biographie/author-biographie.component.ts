import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../models/author';
import { AuthorService  } from '../author.service';
import { Article } from '../models/article';
import { ArticleService  } from '../article.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-author-biographie',
  templateUrl: './author-biographie.component.html',
  styleUrls: ['./author-biographie.component.css']
})
export class AuthorBiographieComponent implements OnInit {

  @Input()
  author: Author;

  articles: Article[];

  constructor(private authorService: AuthorService,private articleService: ArticleService, private route: ActivatedRoute) { }

  loadBio() {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.authorService.getAuthor(name).subscribe(it => this.author = it );
    });

  }
  loadBiblio() {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.articleService.getArticlesOfAuthor(name).subscribe(it => this.articles = it );
    });
  }

  ngOnInit() {
    this.loadBiblio();
    this.loadBio();
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article).subscribe(() => this.loadBiblio());
  }
}
