import foto1 from "../images/IMG_20220422_173423.jpg";
import foto2 from "../images/mercedes1.png";
import foto3 from "../images/js1jpeg.jpeg";
import foto4 from "../images/social.png";
import foto5 from "../images/train1.jpg";

export const DATA_HEADERS_TABLE=[
    {id: '1', name: 'Картинка', width: '150px', arrowDirection: true},
    {id: '2', name: 'Наименование', width: '260px', arrowDirection: true},
    {id: '3', name: 'Дата', width: '120px', arrowDirection: true},
    {id: '4', name: 'Номер', width: '120px', arrowDirection: true}
]

export const DATA_CONTENT_TABLE=[
    {id: '1', img: foto1, name: 'Ясное имя', date: '52023', number: 35678},
    {id: '2', img: foto2, name: 'Название неизвестно ', date: '12023', number: 25678},
    {id: '3', img: foto3, name: 'Без имени ', date: '02023', number: 95678},
    {
        id: '4',
        img: foto4,
        name: 'Наименование скрыто от  пользователей. Доступ только администратору',
        date: '7023',
        number: 15678
    },
    {
        id: '5',
        img: foto5,
        name: 'ЖолыыылодылопшгыололылоорплдыошгпылоплцрдгнрпыолполдцкеИмя',
        date: '22023',
        number: 75678
    },
]

export type DataHeadersTable = {
    id: string
    name: string
    width: string
    arrowDirection: boolean
}

export type DataContentTable = {
    id: string,
    img: string,
    name: string,
    date: string,
    number: number
}
