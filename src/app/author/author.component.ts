import { Component, OnInit, Input } from '@angular/core';
import {Author} from "../models/author";
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input()
  author: Author;

  numberArticles: number;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    
    this.authorService.getNumberArticles(this.author.name).subscribe(it => {
        this.numberArticles = it;
    });
  }

}
