import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';


import {AppComponent} from './app.component';
import {NotFoundPage} from './pages/not_found_page/not.found.page';
import {StartPage} from './pages/start_page/start.page';
import {LoginPage} from './pages/login_page/login.page';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';
import {AppIndex} from './app_index/app.index';
import {ServerDataService} from './work_with_server/server.data.service';
import {HttpClientModule} from '@angular/common/http';
import {MenuCmpComponent} from './elements/menu-cmp/menu-cmp.component';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {PostsPageComponent} from './pages/posts-page/posts-page.component';
import {AddPostComponent} from './pages/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    AppIndex,
    LoginPage,
    NotFoundPage,
    StartPage,
    MenuCmpComponent,
    NewsPageComponent,
    PostsPageComponent,
    AddPostComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    HttpClientModule,
  ],
  providers: [
        ServerDataService,
  ],
  bootstrap: [AppIndex],
})
export class AppModule { }
