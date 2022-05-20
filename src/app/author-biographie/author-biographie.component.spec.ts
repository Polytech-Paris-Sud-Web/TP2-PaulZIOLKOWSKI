import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleHttpRestSource } from '../core/article/article-http-rest-source.service';
import { ArticleSource } from '../core/article/article.source';
import { AuthorHttpRestSource } from '../core/author/author-http-rest-source.service';
import { AuthorSource } from '../core/author/author.source';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthorBiographieComponent } from './author-biographie.component';

describe('AuthorBiographieComponent', () => {
  let component: AuthorBiographieComponent;
  let fixture: ComponentFixture<AuthorBiographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorBiographieComponent],
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
    fixture = TestBed.createComponent(AuthorBiographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
