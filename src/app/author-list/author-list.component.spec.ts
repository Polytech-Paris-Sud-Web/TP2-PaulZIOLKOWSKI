import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthorListComponent } from './author-list.component';
import { ArticleSource } from '../core/article/article.source';
import { ArticleHttpRestSource } from '../core/article/article-http-rest-source.service';
import { AuthorSource } from '../core/author/author.source';
import { AuthorHttpRestSource } from '../core/author/author-http-rest-source.service';
import { HttpClient } from '@angular/common/http';

describe('AuthorListComponent', () => {
  let component: AuthorListComponent;
  let fixture: ComponentFixture<AuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AuthorListComponent],
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
    fixture = TestBed.createComponent(AuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
