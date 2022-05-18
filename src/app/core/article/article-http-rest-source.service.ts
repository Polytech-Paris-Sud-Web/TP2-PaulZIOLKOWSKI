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

  private articles: Observable<Article[]>
  ; 
  constructor(private http : HttpClient) {
    this.articles = this.http.get<Article[]>(environment.db_url+"/articles?_sort=createdAt&_order=desc");
  }
  public getArticles(): Observable<Article[]> {
    return this.articles;
  }
  public getArticle(id: number): Observable<Article> {
    const article =  this.articles.pipe(
      map(articles => articles.find(article => article.id == id))
    );
    return article as Observable<Article>;
  }
  public getLastsArticles(): Observable<Article[]> {    
    const articles =  this.articles.pipe(
      map(articles => articles.slice(0,10))
    );
    return articles as Observable<Article[]>;
  }

  public getArticlesOfAuthor(name: string): Observable<Article[]> {
    const articles =  this.articles.pipe(
      map(articles => articles.filter(article => article.author == name))
    );
    return articles as Observable<Article[]>;
  }

  public getNumberArticlesFromAuthor(name: string) : Observable<number> {
    return this.articles.pipe( 
        map(articles => articles.length)
      );
  }

  public deleteArticle(article: Article) : Observable<any>{
    return this.http.delete<Article[]>(environment.db_url+'/articles/' + article.id);
  }
  public createArticle(Article: CreateArticle) : Observable<Article> {
    return this.http.post<Article>(environment.db_url+'/articles', Article);
  }

}

