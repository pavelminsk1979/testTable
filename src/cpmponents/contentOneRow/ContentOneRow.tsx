
import st from './ContentOneRow.module.css'
import {DataContentTable} from "../../constants/constants";

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