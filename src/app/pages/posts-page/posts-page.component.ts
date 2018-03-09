import {Component, OnInit} from '@angular/core';
import {ServerDataService} from '../../work_with_server/server.data.service';
import {IPosts} from './posts-page.types';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {
  //  Защищенные переменные
  public posts: IPosts[];
  //  Приватные переменные
  private service: ServerDataService; // сервис для работы с бэкэндом

  constructor(service: ServerDataService) {
        this.service = service;
  }

  ngOnInit() {
    this.posts = null;
    this.service.getAllPosts()
      .subscribe((posts) => {
        this.posts = posts;
    }
  );
  }

}
