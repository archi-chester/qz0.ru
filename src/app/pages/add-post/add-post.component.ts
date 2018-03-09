import {Component, OnInit} from '@angular/core';
import {ServerDataService} from '../../work_with_server/server.data.service';
import {IPosts} from '../../app.types';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  //  Защищенные переменные
  public posts: IPosts[];
  //  Приватные переменные
  private service: ServerDataService; // сервис для работы с бэкэндом

  constructor(service: ServerDataService) {
        this.service = service;
  }
  ngOnInit() {
  }

}
