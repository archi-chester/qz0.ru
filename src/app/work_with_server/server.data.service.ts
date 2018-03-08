import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IPostStructure} from './server.types';
import {HttpClient} from '@angular/common/http';
import {postsUrl} from '../app.urls';

@Injectable()

export class ServerDataService {
  // public http: HttpClient;

  //  Конструктор
  constructor(
    private http: HttpClient) {
    // this.http = http;
  }

  //  Функция получения постов
  public getAllPosts(): Observable<IPostStructure[]> {
    return this.http.get(postsUrl)
      .map((res) => {
      console.log(res);
      return res as IPostStructure[];
    }) ;
  }
}
