import {Article, CreateArticle} from '../../models/article'; 
import {Observable} from "rxjs";  

export abstract class ArticleSource {
  abstract getArticles(): Observable<Article[]>;
  abstract getArticle(id: number): Observable<Article>;
  abstract getLastsArticles(): Observable<Article[]>;
  abstract getArticlesOfAuthor(name: string): Observable<Article[]> ;

  abstract deleteArticle(article: Article) : Observable<void>;
  abstract createArticle(Article: CreateArticle): Observable<Article>;
  abstract getNumberArticlesFromAuthor(name: string) : Observable<number>;
  
}
