import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './models/article';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(articles: Article[], searchText: any): any {
    if (searchText === undefined) {
      return articles
        .sort(
          (first: Article, second: Article) =>  {
            if (typeof first.id === 'undefined' || typeof second.id === 'undefined') {
              return 0;
            }
            return (first.id < second.id ? 1 : -1)
    
          })
        .slice(0,10);
    }

    searchText = searchText.toLowerCase();

    return articles.filter(
        article =>
            article.title.toLowerCase().includes(searchText)
            || article.content.toLowerCase().includes(searchText)
    )
    .sort(
      (first: Article, second: Article) =>  {
        if (typeof first.id === 'undefined' || typeof second.id === 'undefined') {
          return 0;
        }
        return (first.id < second.id ? 1 : -1)

      })
    .slice(0, 10);
  }
}