import {Component, OnInit} from '@angular/core';
import {Paths} from '../../paths/paths';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-cmp',
  templateUrl: './menu-cmp.component.html',
  styleUrls: ['./menu-cmp.component.css']
})
export class MenuCmpComponent implements OnInit {

  //  Приватные переменные
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  // переход на стартовую страницу
  public goToStartPage(): void {
      this.router.navigate(['/' + new Paths().startPage.path]);
  }

  // переход на страницу новостей
  public goToNewsPage(): void {
      this.router.navigate(['/' + new Paths().newsPage.path]);
  }

  // переход на страницу постов
  public goToPostsPage(): void {
      this.router.navigate(['/' + new Paths().postsPage.path]);
  }
}
