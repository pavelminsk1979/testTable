import {DataContentTable} from "../../App";
import st from './ContentOneRow.module.css'

type PropsType = {
    contentOneRow:DataContentTable
}

export const ContentOneRow = ({contentOneRow}:PropsType) => {
 return(
     <div className={st.main}>
         <img alt={'Моя фотография'}  src={contentOneRow.img} style={{height: '150px'}}/>
         <span>Наименование:{contentOneRow.name}</span>
         <span>Дата:{contentOneRow.date}</span>
         <span>Номер:{contentOneRow.number}</span>
     </div>
 )
}