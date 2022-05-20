import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ArticleSource } from './article.source';
import { HttpClient } from '@angular/common/http';
import { ArticleHttpRestSource } from './article-http-rest-source.service';
import { AuthorSource } from '../author/author.source';
import { AuthorHttpRestSource } from '../author/author-http-rest-source.service';

describe('ArticleService', () => {
  let service: ArticleSource;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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
    });
    service = TestBed.inject(ArticleSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
