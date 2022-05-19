import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ArticleSource} from '../core/article/article.source';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})

export class ArticleCreationComponent  {
  articleForm : FormGroup;

  constructor(private articleSource: ArticleSource, private fb: FormBuilder, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required ],
      content : ['', Validators.required ],
      author : ['', Validators.required ],
    });
  }

  createArticle() {
    const formModel = this.articleForm.value;
    const newArticle = {
      title : formModel.title,
      content : formModel.content,
      author : formModel.author,
      createdAt: Date.now(),
      deletedAt: 0
    };

    this.articleSource.createArticle(newArticle).subscribe(() => this.router.navigateByUrl('/'));
  }

}
