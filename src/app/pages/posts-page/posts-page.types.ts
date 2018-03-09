// экспорт типа для хранения версий в серверном формате
export interface IPosts {
    _id: string; //  Id
    posttitle: string; // заголовок
    createdate: string; // дата создания
    posttags: string; // тэги
    postbody: string; // тело
    src_picture?: string; //  картинка
}
