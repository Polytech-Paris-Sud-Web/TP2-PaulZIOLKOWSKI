import { Component, OnInit, Input } from '@angular/core';
import {Author} from "../models/author";
import {AuthorSource} from "../core/author/author.source";
import { ArticleSource } from '../core/article/article.source';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input()
  author: Author;

  numberArticles: number;

  constructor(private authorSource: AuthorSource, private articleSource: ArticleSource) { }

  ngOnInit(): void {
    
    this.articleSource.getNumberArticlesFromAuthor(this.author.name).subscribe(it => {
        this.numberArticles = it;
    });
  }

}
