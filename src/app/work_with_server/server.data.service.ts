import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IPostStructure, IServerNews} from './server.types';
import {HttpClient} from '@angular/common/http';
import {newsUrl, postsUrl} from '../app.urls';
import {INews} from '../pages/news-page/news-page.types';
import {isNullOrUndefined} from 'util';

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

  //  функция получения новостей
  public getAllNews(): Observable<INews[]> {
    return this.http.get(newsUrl)
      .map((res: IServerNews[]) => this.convertNewsStoL(res)
      ) //  ошибка
      .catch((err: boolean) => Observable.of([]));
  }

  //  функция получения постов
  public getAllPosts(): Observable<IPostStructure[]> {
    return this.http.get(postsUrl)
      .map((res) => {
      console.log(res);
      return res as IPostStructure[];
    }) ;
  }
}
