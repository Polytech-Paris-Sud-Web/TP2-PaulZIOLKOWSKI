import { Injectable, } from '@angular/core';
import {Author} from '../../models/author'; 
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";  
import { Article } from '../../models/article';

@Injectable({
  providedIn: 'root'
})
export class AuthorHttpRestSource {
  constructor(private http : HttpClient) {
  }

  public getAuthor(name: string): Observable<Author> {
    return this.http.get<Author[]>(`http://localhost:3000/authors?name=${name}`)
      .pipe(
          map(authors => authors[0])
      );
  }
  
  public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`http://localhost:3000/authors`);
  }

}
