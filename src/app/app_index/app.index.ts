import {Component} from '@angular/core';

@Component({
    selector: 'app-index',
    styleUrls: ['./app.index.css'],
    templateUrl: './app.index.html',
})

// экспорт родительского компонента
export class AppIndex {
  constructor() {
    //
  }

  public getTopPadding(): string {
      // return NAVBAR_HEIGHT + "px";
      return 1 + 'px';
  }
}
