import {Component, OnInit} from '@angular/core';
import {ServerDataService} from '../../work_with_server/server.data.service';

@Component({
    selector: 'login-page',
    templateUrl: './login.page.html',
})

export class LoginPage implements OnInit {
  //  Паблик переменные
  public user:
  //  Защищенные переменные
  //  Приватные переменные
  private service: ServerDataService; // сервис для работы с бэкэндом
  //  Конструктор
  constructor(service: ServerDataService) {
        this.service = service;
  }

  // Инициализация
  public ngOnInit(): void {
  //
  }
}
