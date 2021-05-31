export class Article {
  title: string;
  author: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, author: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try{
        // http://angular.io/components
        const domainAndPath: string = this.link.split('//')[1];
        // angular.io/components
        return domainAndPath.split('/')[0];
        // angular.io
    } catch(err) {
        return this.link;
    }
  }
}
