import { Injectable } from '@angular/core';
import {Article, CreateArticle} from '../../models/article'; 
import {map, Observable, of} from "rxjs";  
import { ArticleSource } from './article.source'

export class ArticleInMemorySource implements ArticleSource {

  constructor(private articles : Article[] = [] ) {   }
  
  public getArticles(): Observable<Article[]> {
    return of(this.articles);
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
      author: Article.author
    }

    this.articles.push(newArticle);
    return of(newArticle);

  }

  public getNumberArticlesFromAuthor(name: string) : Observable<number> { 
    const article = this.articles.filter( _ => _.author == name).length;
    return of(article); 
  }
  
}
