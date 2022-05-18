import { Injectable } from '@angular/core';
import {Article, CreateArticle} from '../../models/article'; 
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";  
import { ArticleSource } from './article.source'

@Injectable({
  providedIn: 'root'
})
export class ArticleHttpRestSource implements ArticleSource {

  constructor(private http : HttpClient) {
  }
  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles"); 
  }
  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>("http://localhost:3000/articles/"+id); 
  }

  public getArticlesOfAuthor(name: string): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles?author="+name); 
  }

  public deleteArticle(article: Article) : Observable<any>{
    return this.http.delete<Article[]>('http://localhost:3000/articles/' + article.id);
  }
  public createArticle(Article: CreateArticle) : Observable<Article> {
    return this.http.post<Article>('http://localhost:3000/articles', Article);
  }

  
  public getNumberArticlesFromAuthor(name: string) : Observable<number> {
    return this.http.get<Article[]>("http://localhost:3000/articles?author="+name).pipe( 
        map(articles => articles.length)
      );
  }

}
