import {Component, OnInit} from '@angular/core';
import {INews} from './news-page.types';
import {ServerDataService} from '../../work_with_server/server.data.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  //  паблики
  //  массив новостей
  public news: INews[] = [];

  //  приватные переменные
  private service: ServerDataService; // сервис для работы с бэкэндом

  //  конструктор
  constructor(service: ServerDataService) {
        this.service = service;
  }

  //  получаем новости с сервера
  public getNews(): void {
  //  какой-то функционал связи с сервером
  //   this.news = [
  //     {
  //       author: 'Вася',
  //       date: '21.12.2018',
  //       picture: 'http://animevost.org/uploads/posts/2017-09/1504775240_1.jpg',
  //       text: 'много текста',
  //       title: 'с картинкой',
  //     },
  //     {
  //       author: 'Петя',
  //       date: '22.13.2018',
  //       text: 'много текста',
  //       title: 'без картинки',
  //     },
  //   ];
    this.service.getAllNews()
      .subscribe(
    (news: INews[]) => this.news = news,
    (err: INews[]) => this.news = []
      );
  }

  //  инициализация
  ngOnInit() {
  //  дергаем получение новостей
    this.getNews();
  }

}
