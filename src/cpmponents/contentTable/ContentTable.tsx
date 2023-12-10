import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import st from "../BasicTable.module.css";
import * as React from "react";
import {DataContentTable} from "../../constants/constants";



type PropsType = {
  dataContentTable:DataContentTable[]
  handleOpenModal:(img: string)=>void
  handleOnClickTableRow:(id: string)=>void
}
export const ContentTable = ({dataContentTable,handleOpenModal,handleOnClickTableRow}:PropsType) => {
  return(
      <TableBody>
        {dataContentTable.map(({id, img, name, date, number}) => {
          return (
              <TableRow
                  key={id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell align="center">
                  <img className={st.sizeImg} alt={'фотография'} src={img}
                       onClick={() => handleOpenModal(img)}/>
                </TableCell>
                <TableCell onClick={() => handleOnClickTableRow(id)} align="left"
                           sx={{
                             color: '#053f02',
                             fontFamily: "'Pacifico', cursive",
                             fontSize: '22px',
                           }}
                >{name}</TableCell>
                <TableCell onClick={() => handleOnClickTableRow(id)} align="left"
                           sx={{
                             color: '#b49901',
                             fontFamily: "'Russo One', sans-serif",
                             fontSize: '18px',
                           }}>{date}</TableCell>
                <TableCell onClick={() => handleOnClickTableRow(id)}
                           align="left" sx={{
                  color: '#662376',
                  fontFamily: "'Russo One', sans-serif",
                  fontSize: '18px',
                }}>{number}</TableCell>
              </TableRow>
          )
        })}
      </TableBody>
  )
}