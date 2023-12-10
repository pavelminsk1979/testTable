import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {DataContentTable, DataHeadersTable} from "../App";
import st from './BasicTable.module.css'
import {BasicModal} from "./basicModal/BasicModal";
import {useState} from "react";
import {ContentOneRow} from "./contentOneRow/ContentOneRow";
import {IconButton} from "@mui/material";
import {ArrowCircleDown, ArrowCircleUp} from "@mui/icons-material";
import {SwitchComponent} from "./switchComponent/SwitchComponent";

type PropsType = {
    dataHeadersTable: DataHeadersTable[]
    dataContentTable: DataContentTable[]
    changeArrowDirection:(id:string,arrowDirection:boolean,name:string)=>void
}

export const BasicTable = ({dataHeadersTable, dataContentTable,changeArrowDirection}: PropsType) => {
    const [positionModal, setPositionModal] = useState(false);

    const [currentImg, setCurrentImg] = useState('')

    const[contentOneRow,setContentOneRow]=useState<DataContentTable[]>([{   id:'', img:'', name:'', date:'', number:0}])

    const [isDarkBackgroundColor,setIsDarkBackgroundColor]=useState(false)


    const handleOpenModal = (img: string) => {
        setPositionModal(true)
        setCurrentImg(img)

    }
    const handleCloseModal = () => {
        setCurrentImg('')
        setPositionModal(false)
    }

    const handleOnClickTableRow = (id: string) => {
        setCurrentImg('')
        setPositionModal(true)
        const contentOneRow=dataContentTable.filter(row=>row.id===id)
        setContentOneRow(contentOneRow)
    }

    const handleArrowDirection = (id:string,arrowDirection:boolean,name:string) => {
       changeArrowDirection(id,arrowDirection,name)
    }

    const handlerOnChackedChange = (checked: boolean) => {
        document.body.classList.toggle('dark-mode', checked)
        setIsDarkBackgroundColor(!isDarkBackgroundColor)
    }

    return (
        <div>
<SwitchComponent handlerOnChackedChange={handlerOnChackedChange}/>
            <BasicModal openModal={positionModal} closeModal={handleCloseModal}>
                {currentImg && <img alt={'Моя фотография'} src={currentImg} style={{height: '200px', margin: 'auto'}}/>}
                {!currentImg&&<ContentOneRow contentOneRow={contentOneRow[0]}/>}

            </BasicModal>

            <TableContainer component={Paper} style={{  backgroundColor: isDarkBackgroundColor ? '#6f6f6f' : '#d1d1b2' }}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
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
                    </TableHead>
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
                                                   fontFamily:  "'Pacifico', cursive",
                                                   fontSize: '22px',
                                               }}
                                    >{name}</TableCell>
                                    <TableCell onClick={() => handleOnClickTableRow(id)} align="left"
                                               sx={{
                                                   color: '#b49901',
                                                   fontFamily:  "'Russo One', sans-serif",
                                                   fontSize: '18px',
                                               }}>{date}</TableCell>
                                    <TableCell onClick={() => handleOnClickTableRow(id)}
                                               align="left"        sx={{
                                        color: '#662376',
                                        fontFamily:  "'Russo One', sans-serif",
                                        fontSize: '18px',
                                    }}>{number}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

