import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ArticleCreationComponent } from './article-creation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { ArticleSource } from '../core/article/article.source';
import { ArticleHttpRestSource } from '../core/article/article-http-rest-source.service';
import { AuthorHttpRestSource } from '../core/author/author-http-rest-source.service';
import { AuthorSource } from '../core/author/author.source';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ArticleCreationComponent', () => {
  let component: ArticleCreationComponent;
  let fixture: ComponentFixture<ArticleCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleCreationComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        FormBuilder,
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
    fixture = TestBed.createComponent(ArticleCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
