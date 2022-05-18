import { TestBed } from '@angular/core/testing';

import { AuthorSource } from './author.source';

describe('AuthorService', () => {
  let service: AuthorSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
