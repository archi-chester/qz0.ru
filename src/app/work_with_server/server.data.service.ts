import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IServerNews, IServerPosts} from './server.types';
import {HttpClient} from '@angular/common/http';
import {newsUrl, postsUrl} from '../app.urls';
import {INews} from '../pages/news-page/news-page.types';
import {isNullOrUndefined} from 'util';
import {IPosts} from '../pages/posts-page/posts-page.types';

@Injectable()

export class ServerDataService {
  // public http: HttpClient;

  //  конструктор
  constructor(
    private http: HttpClient) {
    // this.http = http;
  }

  //   конвертер новостей Сервер => Клиент
  public convertNewsStoL(serverNews: IServerNews[]): INews[] {
    const news: INews[] = [];
    if (isNullOrUndefined(serverNews)) {
      return news;
    } else {
      serverNews.forEach((article: IServerNews) => {
        news.push({
          author: article.author,
          date: article.date,
          picture: article.picture,
          text: article.text,
          title: article.title,
        });
        });
      return news;
    }
  }

  //   конвертер новостей Сервер => Клиент
  public convertPostsStoL(serverPosts: IServerPosts[]): IPosts[] {
    const posts: IPosts[] = [];
    if (isNullOrUndefined(serverPosts)) {
      return posts;
    } else {
      serverPosts.forEach((post: IServerPosts) => {
        posts.push({
          _id: post._id,
          createdate: post.createdate,
          posttitle: post.posttitle,
          posttags: post.posttags,
          postbody: post.postbody,
        });
        });
      return posts;
    }
  }

  //  функция получения новостей
  public getAllNews(): Observable<INews[]> {
    return this.http.get(newsUrl)
      .map((res: IServerNews[]) => this.convertNewsStoL(res))
      //  ошибка
      .catch((err: boolean) => Observable.of([]));
  }

  //  функция получения постов
  public getAllPosts(): Observable<IPosts[]> {
    return this.http.get(postsUrl)
      .map((res: IServerPosts[]) => this.convertPostsStoL(res))
      //  ошибка
      .catch((err: boolean) => Observable.of([]));
  }
}
