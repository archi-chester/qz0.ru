// экспорт типа для хранения версий в серверном формате
export interface IServerPosts {
    _id?: string; //  Id
    posttitle: string; // заголовок
    createdate: string; // дата создания
    posttags: string[]; // тэги
    postbody: string; // тело
    picture?: string; //  графика
}

// экспорт типа для новостей в серверном формате
export interface IServerNews {
    author?: string; //  автор новости
    date?: string; //  время публикации
    picture?: string; //  графика
    text: string; //  текст статьи
    title: string;  //  заголовок
}
