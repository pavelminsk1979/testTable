import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {IconButton} from "@mui/material";
import {ArrowCircleDown, ArrowCircleUp} from "@mui/icons-material";
import * as React from "react";
import {DataHeadersTable} from "../../constants/constants";

type PropsType = {
    dataHeadersTable:DataHeadersTable[]
    handleArrowDirection:(id:string,arrowDirection:boolean,name:string)=>void
}

export const HeadersTable = ({dataHeadersTable,handleArrowDirection}:PropsType) => {
  return(
      <TableRow>
        {dataHeadersTable.map(({id, name, width,arrowDirection}: DataHeadersTable) => {
          return (
              <TableCell key={id} sx={{
                color: '#510610',
                fontSize: '32px',
                fontWeight: 'bold',
                width,
                fontFamily: "'Oswald', sans-serif"
              }}>{name}
                {name!=='Картинка'&&   <IconButton
                    size={"large"}
                    onClick={()=>handleArrowDirection(id,arrowDirection,name)}>
                  {arrowDirection
                      ? <ArrowCircleUp/>
                      : <ArrowCircleDown/>}
                </IconButton>}

              </TableCell>

          )
        })}
      </TableRow>
  )
}