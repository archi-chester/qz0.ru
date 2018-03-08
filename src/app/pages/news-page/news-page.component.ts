import {Component, OnInit} from '@angular/core';
import {INews} from './news-page.types';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  //  паблики
  //  массив новостей
  public news: INews[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.news);
  }

}
