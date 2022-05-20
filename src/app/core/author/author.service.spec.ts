import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthorSource } from './author.source';
import { ArticleSource } from '../article/article.source';
import { HttpClient } from '@angular/common/http';
import { ArticleHttpRestSource } from '../article/article-http-rest-source.service';
import { AuthorHttpRestSource } from './author-http-rest-source.service';

describe('AuthorService', () => {
  let service: AuthorSource;

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
    service = TestBed.inject(AuthorSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
