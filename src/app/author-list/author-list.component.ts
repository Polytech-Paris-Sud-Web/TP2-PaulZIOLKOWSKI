import { Component, OnInit } from '@angular/core';
import {Author} from "../models/author";
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {


  authors: Author[];

  constructor(private authorService: AuthorService) {
    this.authors = [] ;
  }
  
  getAuthors() {
      this.authorService.getAuthors().subscribe(it => {
          this.authors = it;
      });
  }

  ngOnInit() {
      this.getAuthors();
  }

}