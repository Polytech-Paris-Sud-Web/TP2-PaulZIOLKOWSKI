import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../models/article';
import {ArticleSource} from '../core/article/article.source';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html'
})
export class ArticleDetailsComponent implements OnInit {

  @Input()
  article: Article;

  constructor(private articleSource: ArticleSource, private route: ActivatedRoute, private router: Router) { }

  delete() {
    this.articleSource.deleteArticle(this.article).subscribe(() => this.router.navigateByUrl('/'));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const articleId = params['id'];
      this.articleSource.getArticle(articleId).subscribe(it => this.article = it);
    });
  }
}