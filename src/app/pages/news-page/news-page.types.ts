// экспорт типа данных для новостей
export interface INews {
    author: string; //  автор новости
    date: string; //  время публикации
    picture?: string; //  графика
    text: string; //  текст статьи
    title: string;  //  заголовок
}
