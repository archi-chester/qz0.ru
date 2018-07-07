import {Component, Input, OnInit} from '@angular/core';
import {ServerDataService} from '../../work_with_server/server.data.service';
import {IPosts} from '../../app.types';
import {isNullOrUndefined} from 'util';
import {NgForm} from '@angular/forms';

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
  public selectedFile: File;  //  выбранный файл
  // @Input() public posttitle: ''; // заголовок
  // @Input() public postbody: ''; // тело
  // @Input() public src_picture: ''; //  картинка
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
    console.log(title.value.trim().replace(/<.*?>/g, ''),         body.value.trim(), file.value);
    //  заполняем тайтл. регулярка отшибет все теги
    this.post.posttitle = title.value.trim().replace(/<.*?>/g, '');
    //  заполняем текст. регулярка отшибет все теги
    this.post.postbody = body.value.trim().replace(/<.*?>/g, '');
    //  на файл пока заглушку
    this.post.src_picture = file.value;
    //  системный вызов
    this.service.addNewPost(this.post).subscribe(
      ((res: boolean) => console.log('!:', res))
    );
  }

  //  добавить тег к массиву
  public addTag(tag: HTMLInputElement): void {
    //
    if (!isNullOrUndefined(this.post.posttags) &&
        tag.value !== '' &&
        this.post.posttags.indexOf(tag.value.trim()) < 0) {
      this.post.posttags.push(tag.value.trim());
      this.post.posttags.sort();
    }
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

  public testForm(title: HTMLInputElement,
                  body: HTMLInputElement,
                  send: HTMLInputElement): void {
    title.value !== '' && body.value !== '' ?
      send.hidden = false : send.hidden = true;
  }

  public onFileChanged(event: any) {
    console.log('onFileChanged');
    console.log(event);
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  public onSubmit(form: NgForm) {
    console.log("1");
    console.log(form);
  }

  public onUpload() {
    //  системный вызов
    console.log('onUpload');
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    console.log('onUpload2');
    this.service.uploadPostFiles(uploadData)
      .subscribe();
  }
}
