import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding new article, title: ${title.value}, link: ${link.value}`);
    return false;
  }
}
