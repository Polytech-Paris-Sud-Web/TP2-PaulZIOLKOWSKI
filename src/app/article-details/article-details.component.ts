import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../models/article';
import {ArticleService} from '../article.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  @Input()
  article: Article;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  delete() {
    this.articleService.deleteArticle(this.article).subscribe(() => this.router.navigateByUrl('/'));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const articleId = params['id'];
      this.articleService.getArticle(articleId).subscribe(it => this.article = it);
    });
  }
}