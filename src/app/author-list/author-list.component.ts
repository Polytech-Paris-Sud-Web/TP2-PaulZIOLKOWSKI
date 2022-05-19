import { Component, OnInit } from '@angular/core';
import { Author } from "../models/author";
import { AuthorSource } from "../core/author/author.source";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html'
})
export class AuthorListComponent implements OnInit {


  authors: Author[];

  constructor(private authorSource: AuthorSource) {
    this.authors = [] ;
  }
  
  getAuthors() {
      this.authorSource.getAuthors().subscribe(it => {
          this.authors = it;
      });
  }

  ngOnInit() {
      this.getAuthors();
  }

}