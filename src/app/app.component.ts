import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Google', 'www.google.com', 4),
      new Article('Angular', 'angular.io', 6),
      new Article('GitHub', 'www.github.com', 3)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding new article, title: ${title.value}, link: ${link.value}`);
    return false;
  }
}
