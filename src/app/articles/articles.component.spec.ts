import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticleHttpRestSource } from '../core/article/article-http-rest-source.service';
import { ArticleSource } from '../core/article/article.source';
import { AuthorHttpRestSource } from '../core/author/author-http-rest-source.service';
import { AuthorSource } from '../core/author/author.source';

import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: ArticleSource,
          useFactory: (httpClient: HttpClient) => {
            return new ArticleHttpRestSource(httpClient);
          },
          deps: [HttpClient],
        },
        {
          provide: AuthorSource,
          useFactory: (httpClient: HttpClient) => {
            return new AuthorHttpRestSource(httpClient);
          },
          deps: [HttpClient],
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
