import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ArticleService} from '../article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})

export class ArticleCreationComponent implements OnInit {
  articleForm : FormGroup;

  constructor(private articleService: ArticleService, private fb: FormBuilder, private router: Router) {
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
      author : formModel.author
    };

    this.articleService.createArticle(newArticle).subscribe(() => this.router.navigateByUrl('/'));
  }

  ngOnInit(): void {
  }

}
