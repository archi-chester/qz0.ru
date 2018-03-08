import {Paths} from './paths/paths';
import {Routes} from '@angular/router';
import {NotFoundPage} from './pages/not_found_page/not.found.page';
import {LoginPage} from './pages/login_page/login.page';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {StartPage} from './pages/start_page/start.page';
import {PostsPageComponent} from './pages/posts-page/posts-page.component';

const paths: Paths = new Paths();

export const appRoutes: Routes = [

    //  страничка по умолчанию
    { path: '', pathMatch: 'full', redirectTo: paths.loginPage.path},

    // логин
    { component: LoginPage,  path: paths.loginPage.path },

    // новостная страница
    // { canActivate: [UserInfo], component: StartPage,  path: paths.startPage.path },
    { component: NewsPageComponent,  path: paths.newsPage.path },

    // стартовая страница
    // { canActivate: [UserInfo], component: StartPage,  path: paths.startPage.path },
    { component: StartPage,  path: paths.startPage.path },

    // стартовая страница
    // { canActivate: [UserInfo], component: StartPage,  path: paths.startPage.path },
    { component: PostsPageComponent,  path: paths.postsPage.path },

    // // путь к странице предложения в план (препланирование) - подробности
    // { canActivate: [UserInfo], component: PreplanningCurrentPlan, path: paths.preplanningCurrentPlanPage.path +
    //     "/:" + paths.preplanningCurrentPlanPage.params.planId +
    //     "/:" + paths.preplanningCurrentPlanPage.params.planVer},
    // { canActivate: [UserInfo], component: PreplanningCurrentPlan, path: paths.preplanningCurrentPlanPage.path +
    //     "/:" + paths.preplanningCurrentPlanPage.params.planId},
    // { canActivate: [UserInfo], component: PreplanningCurrentPlan, path: paths.preplanningCurrentPlanPage.path},

    // переход на ненайденную страницу
    // { canActivate: [UserInfo], component: NotFoundPage, path: paths.notFoundPage.path },
    { component: NotFoundPage, path: paths.notFoundPage.path },
];
