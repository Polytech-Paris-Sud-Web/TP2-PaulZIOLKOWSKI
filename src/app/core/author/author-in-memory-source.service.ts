import { Author } from '../../models/author';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Article } from '../../models/article';

export class AuthorInMemorySource {
  constructor(private authors: Author[] = []) {}

  public getAuthor(name: string): Observable<Author> {
    const author = this.authors.find((_) => _.name == name);
    if (author) {
      return of(author);
    } else {
      throw new Error(`Author not found for name ${name}`);
    }
  }

  public getAuthors(): Observable<Author[]> {
    return of(this.authors);
  }

  public preload() {
    return of(undefined);
  }
}
