export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
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
