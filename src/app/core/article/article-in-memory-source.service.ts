import { Injectable } from '@angular/core';
import {Article, CreateArticle} from '../../models/article'; 
import {map, Observable, of} from "rxjs";  
import { ArticleSource } from './article.source'

export class ArticleInMemorySource implements ArticleSource {

  public needReload : boolean; 

  constructor(private articles : Article[] = [] ) {   }
  public preload() : Observable<Article[]> { return of([]) as Observable<Article[]>;  }

  public getArticles(): Observable<Article[]> {
    return of(
      this.articles
        .sort( (a,b) => {
          if(a.createdAt < b.createdAt) {
            return 1;
          }
          else {
            return 0;
          }
        })
    );
  }
  public getArticle(id: number): Observable<Article> {
    const article = this.articles.find( _ => _.id == id)
    if(article) {
      return of(article);  
    }
    else {
      throw new Error(`Article not found for id $(id)`)
    }
  }
  public getLastsArticles(): Observable<Article[]> {
    return of(
      this.articles
        .sort( (a,b) => {
          if(a.createdAt < b.createdAt) {
            return 1;
          }
          else {
            return 0;
          }
        })
        .slice(10)
    );
  }

  public getArticlesOfAuthor(name: string): Observable<Article[]> {    
    const article = this.articles.filter( _ => _.author == name)
    return of(article);  
  }

  public deleteArticle(article: Article) : Observable<void>{
    this.articles = this.articles.filter( _ => _.id != article.id)
    return of(undefined);
  }
  public createArticle(Article: CreateArticle) {
    const newArticle = {
      id: this.articles.length, 
      title: Article.title,
      content: Article.content,
      author: Article.author,
      createdAt: Article.createdAt,
      deletedAt : Article.deletedAt
    }

    this.articles.push(newArticle);
    return of(newArticle);

  }

  public getNumberArticlesFromAuthor(name: string) : Observable<number> { 
    const article = this.articles.filter( _ => _.author == name).length;
    return of(article); 
  }
  
}
