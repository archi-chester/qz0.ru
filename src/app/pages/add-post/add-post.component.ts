import {Component, Input, OnInit} from '@angular/core';
import {ServerDataService} from '../../work_with_server/server.data.service';
import {IPosts} from '../../app.types';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  //  Общие переменные
  @Input() public post: IPosts = {
    _id: '', //  Id
    posttitle: '', // заголовок
    createdate: '', // дата создания
    posttags: [], // тэги
    postbody: '', // тело
    src_picture: '', //  картинка
  };
  //  Приватные переменные
  private service: ServerDataService; // сервис для работы с бэкэндом

  //  конструктор
  constructor(service: ServerDataService) {
        this.service = service;
  }

  //  инициализация
  ngOnInit() {
  }

  //  отправка поста сервису
  public addPost(): void {
    //
  }

  //  добавить тег к массиву
  public addTag(tag: string): void {
    //
  }

}
