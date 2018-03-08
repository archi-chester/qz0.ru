// экспорт типа для хранения версий в серверном формате
export interface IPostStructure {
    _id: string; //  Id
    posttitle: string; // заголовок
    createdate: string; // дата создания
    posttags: string; // тэги
    postbody: string; // тело
}
