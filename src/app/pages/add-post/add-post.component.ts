import {Component, Input, OnInit} from '@angular/core';
import {ServerDataService} from '../../work_with_server/server.data.service';
import {IPosts} from '../../app.types';
import {isNullOrUndefined} from 'util';

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
  @Input() public posttitle: ''; // заголовок
  @Input() public postbody: ''; // тело
  @Input() public src_picture: ''; //  картинка
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
  public addPost(title: HTMLInputElement,
                 body: HTMLInputElement,
                 file: HTMLInputElement): void {
    //
    console.log(title.value, body.value, file.value);
  }

  //  Очистка полей формы
  public clearForm(title: HTMLInputElement,
                   body: HTMLInputElement,
                   file: HTMLInputElement,
                   tag: HTMLInputElement): void {
    title.value = '';
    body.value = '';
    file.value = '';
    tag.value = '';
    this.post.posttags = [];
  }

  //  добавить тег к массиву
  public addTag(tag: HTMLInputElement): void {
    //
    if (!isNullOrUndefined(this.post.posttags) &&
        tag.value !== '' &&
        this.post.posttags.indexOf(tag.value) < 0) {
      this.post.posttags.push(tag.value);
      this.post.posttags.sort();
    }
  }

}
