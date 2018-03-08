//  класс путей
import {IPath} from './paths.types';

export class Paths {
    // путь к странице "Не найдено"
    public notFoundPage: IPath = {
        path: 'not_found',
    };

    // путь к странице логина
    public loginPage: IPath = {
        path: 'login',
    };

    // путь к странице новостей
    public newsPage: IPath = {
        path: 'news',
    };

    // путь к стартовой странице
    public startPage: IPath = {
        path: 'start_page',
    };

    // путь к стартовой странице
    public postsPage: IPath = {
        path: 'posts',
    };

}
