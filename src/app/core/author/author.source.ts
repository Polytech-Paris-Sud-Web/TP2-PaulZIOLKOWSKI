import { Injectable, } from '@angular/core';
import {Author} from '../../models/author'; 
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";  
import { Article } from '../../models/article';

export abstract class AuthorSource {

  abstract getAuthor(name: string): Observable<Author> ;
  
  abstract getAuthors(): Observable<Author[]> ;


}
