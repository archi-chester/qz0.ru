import {Component, OnInit} from '@angular/core';
import {ServerDataService} from '../../work_with_server/server.data.service';
import {IUser} from './login.types';

@Component({
    selector: 'login-page',
    templateUrl: './login.page.html',
})

export class LoginPage implements OnInit {
  //  Паблик переменные
  public user: IUser = null;
  //  Защищенные переменные
  //  Приватные переменные
  private service: ServerDataService; // сервис для работы с бэкэндом
  //  Конструктор
  constructor(service: ServerDataService) {
        this.service = service;
  }

  // Инициализация
  public ngOnInit(): void {
    //  объявляем логин по умолчанию
    // this.user.login = 'Гость';
  }

  //  Процедура логина
  //  userLogin - логин
  //  userPassword - пароль
  public login(userLogin?: HTMLInputElement, userPassword?: HTMLInputElement): void {
    //  проверяем, что передали
    if (userLogin != null && userPassword != null) {
      //    передали не пустоту - логиним
      this.user = {
        login: userLogin.value.trim(),
        password: null,
      };
    } else {
      //  передали пустоту - разлогиниваемся
      this.user = null;
    }
  }
}
