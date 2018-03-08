import {Component, OnInit} from '@angular/core';
import {ServerDataService} from '../../work_with_server/server.data.service';
import {IPostStructure} from '../../work_with_server/server.types';

@Component({
    templateUrl: './login.page.html',
})

export class LoginPage implements OnInit {
  //  Защищенные переменные
  public posts: IPostStructure[];
  public testValue: string = '';
  //  Приватные переменные
  private service: ServerDataService; // сервис для работы с бэкэндом
  //  Конструктор
  constructor(service: ServerDataService) {
        this.service = service;
  }

  // Инициализация
  public ngOnInit(): void {
    this.posts = null;
    this.service.getAllPosts()
      .subscribe((posts) => {
        this.posts = posts;
        console.log('ngOnInit: ');
        console.log(posts);
        // console.log(this.posts);
        // console.log(String(this.posts[1]._id));
        this.testValue = this.posts[1].postbody;
    }
  );
  }
}
