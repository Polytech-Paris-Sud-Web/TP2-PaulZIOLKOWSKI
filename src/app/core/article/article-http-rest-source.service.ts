import { Injectable } from '@angular/core';
import {Article, CreateArticle} from '../../models/article'; 
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";  
import { ArticleSource } from './article.source'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleHttpRestSource implements ArticleSource {

  constructor(private http : HttpClient) {
  }
  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.db_url+"/articles"); 
  }
  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(environment.db_url+"/articles/"+id); 
  }
  public getLastsArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.db_url+"/articles?_sort=createdAt&_order=desc&_start=0&_end=10"); 
  }

  public getArticlesOfAuthor(name: string): Observable<Article[]> {
    return this.http.get<Article[]>(environment.db_url+"/articles?author="+name); 
  }

  public deleteArticle(article: Article) : Observable<any>{
    return this.http.delete<Article[]>(environment.db_url+'/articles/' + article.id);
  }
  public createArticle(Article: CreateArticle) : Observable<Article> {
    return this.http.post<Article>(environment.db_url+'/articles', Article);
  }
  public getNumberArticlesFromAuthor(name: string) : Observable<number> {
    return this.http.get<Article[]>(environment.db_url+"/articles?author="+name).pipe( 
        map(articles => articles.length)
      );
  }

}
