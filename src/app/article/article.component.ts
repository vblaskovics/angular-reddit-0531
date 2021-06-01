import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  @Input() index: number;
  @Output() onDelete: EventEmitter<string>;

  constructor() {
    this.onDelete = new EventEmitter<string>();
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  deleteArticle(): boolean {
    this.onDelete.emit(this.article.title);  
    return false;
  }

  ngOnInit(): void {}
}
