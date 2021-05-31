import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];
  ascendingSort: boolean;

  constructor() {
    this.ascendingSort = false;
    this.articles = [
      new Article(
        'Angular Hello World',
        'https://www.simplilearn.com/tutorials/angular-tutorial/angular-hello-world',
        'Chinmayee Deshpande',
        4
      ),
      new Article(
        'Good Parts of JavaScript',
        'https://levelup.gitconnected.com/good-parts-of-javascript-coding-best-practices-8328a8cac7fd',
        'John Au-Yeung',
        2
      ),
    ];
  }

  addArticle(
    title: HTMLInputElement,
    link: HTMLInputElement,
    author: HTMLInputElement
  ): boolean {
    console.log(
      `Adding new article, title: ${title.value}, link: ${link.value}`
    );
    this.articles.push(new Article(title.value, link.value, author.value));

    title.value = '';
    link.value = '';
    author.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.ascendingSort
      ? this.articles.sort((a: Article, b: Article) => a.votes - b.votes)
      : this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  toggleSort() {
    this.ascendingSort = !this.ascendingSort;
    return false;
  }
}
