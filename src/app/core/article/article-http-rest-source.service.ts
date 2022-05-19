import { Injectable } from '@angular/core';
import {Article, CreateArticle} from '../../models/article'; 
import {HttpClient} from "@angular/common/http";
import { Observable, of} from "rxjs";  
import { ArticleSource } from './article.source'
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ArticleHttpRestSource implements ArticleSource {

  private articles: Article[] | undefined; 

  constructor(private http : HttpClient) {  }
  
  public preload() : Observable<Article[]> {
    if (!this.articles) {
      return this.http.get<Article[]>(`${environment.db_url}/articles?_sort=createdAt&_order=desc`).pipe(
        map(articles => {
          this.articles = articles;
          return articles;
        })
      );
    }
    return of(this.articles);
  }
  public getArticles(): Observable<Article[]> {
    return this.articles ? of(this.articles) : this.preload() ;
  }
  
  public getArticle(id: number): Observable<Article> {
    const article = this.getArticles().pipe(
      map(articles => articles?.find(article => article.id == id))
    );
    return article as Observable<Article>;
    
  }
  public getLastsArticles(): Observable<Article[]> {
    return this.getArticles().pipe(
      map(articles => articles.slice(0, 10))
    );
  }

  public getArticlesOfAuthor(name: string): Observable<Article[]> {
    const articles =  this.getArticles().pipe(
      map(articles => articles?.filter(article => article.author == name))
    );
    return articles as Observable<Article[]>;
  }

  public getNumberArticlesFromAuthor(name: string) : Observable<number> {
    if(!this.articles) {
      this.preload().subscribe();
    }
    if(this.articles) {
      return of(this.articles.length);
    }
    else {
      return of(0);
    }
  }

  public deleteArticle(article: Article) : Observable<any>{
    return this.http.delete<Article[]>(environment.db_url+'/articles/' + article.id);
  }
  public createArticle(Article: CreateArticle) : Observable<Article> {
    return this.http.post<Article>(environment.db_url+'/articles', Article);
  }

}

