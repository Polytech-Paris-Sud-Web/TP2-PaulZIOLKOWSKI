import { TestBed } from '@angular/core/testing';

import { ArticleSource } from './article.source';

describe('ArticleSource', () => {
  let service: ArticleSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
