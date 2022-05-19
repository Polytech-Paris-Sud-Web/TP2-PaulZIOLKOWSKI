import { Injectable, } from '@angular/core';
import {Author} from '../../models/author'; 
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";  
import { Article } from '../../models/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorHttpRestSource {

  private preLoadedAuthors : Author[] | undefined;

  constructor(private http : HttpClient) {  }

  public preload(): Observable<Author[]> {
    if (!this.preLoadedAuthors) {
      return this.http.get<Author[]>(`${environment.db_url}/authors`).pipe(
        map(authors => {
          this.preLoadedAuthors = authors;
          return authors;
        })
      );
    }
    return of(this.preLoadedAuthors);
  }


  public getAuthor(name: string): Observable<Author> {
    return of(this.preLoadedAuthors?.find(author => author.name == name)) as Observable<Author>;
  }
  
  public getAuthors(): Observable<Author[]> {
    return this.preLoadedAuthors ? of(this.preLoadedAuthors) : this.preload() ;
  }

}
