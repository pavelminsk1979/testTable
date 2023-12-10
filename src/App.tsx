import React, {useState} from 'react';
import {BasicTable} from "./cpmponents/BasicTable";
import st from './App.module.css'
import foto1 from './images/IMG_20220422_173423.jpg'
import foto2 from './images/mercedes1.png'
import foto3 from './images/js1jpeg.jpeg'
import foto4 from './images/social.png'
import foto5 from './images/train1.jpg'

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


function App() {

    const [dataHeadersTable, setDataHeadersTable] = useState<DataHeadersTable[]>([
        {id: '1', name: 'Картинка', width: '150px', arrowDirection: true},
        {id: '2', name: 'Наименование', width: '300px', arrowDirection: true},
        {id: '3', name: 'Дата', width: '100px', arrowDirection: true},
        {id: '4', name: 'Номер', width: '100px', arrowDirection: true}
    ])

    const [dataContentTable,setDataContentTable]=useState<DataContentTable[]>([
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

    ])

    const copyData=dataContentTable.map(e=>({...e}))

    const sortFildName = (arrowDirection:boolean) => {
        if(arrowDirection){
            setDataContentTable(copyData.sort((a,b)=>a.name.toLowerCase()<b.name.toLowerCase()?-1:1))
        } else {     setDataContentTable(copyData.sort((a,b)=>a.name.toLowerCase()<b.name.toLowerCase()?-1:1).reverse())}
    }

    const sortFildDate = (arrowDirection:boolean) => {
        if(arrowDirection){
            setDataContentTable(copyData.sort((a,b)=> (Number(a.date)-Number(b.date))))
        }else {setDataContentTable(copyData.sort((a,b)=> (Number(b.date)-Number(a.date))))}
    }

    const sortFildNumber = (arrowDirection:boolean) => {
        if(arrowDirection){
            setDataContentTable(copyData.sort((a,b)=> (a.number-b.number)))
        }else {setDataContentTable(copyData.sort((a,b)=> (b.number-a.number)))}
    }

    const changeArrowDirection = (id: string, arrowDirection: boolean,name:string) => {

        setDataHeadersTable(dataHeadersTable.map(el=>el.id===id?{...el,arrowDirection:!arrowDirection}:el))

        if(name==='Наименование'){sortFildName(arrowDirection)}
        if(name==='Дата'){sortFildDate(arrowDirection)}
        if(name==='Номер'){sortFildNumber(arrowDirection)}
    }


    return (
        <div className={st.main}>
            <BasicTable dataHeadersTable={dataHeadersTable} dataContentTable={dataContentTable}
                        changeArrowDirection={changeArrowDirection}/>
        </div>
    );
}

export default App;
