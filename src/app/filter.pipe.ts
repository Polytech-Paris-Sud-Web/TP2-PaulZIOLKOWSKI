import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './models/article';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(articles: Article[], searchText: any): any {
    if (searchText === undefined) {
      return articles;
    }

    searchText = searchText.toLowerCase();

    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchText) || article.content.toLowerCase().includes(searchText)
    );
  }
}
