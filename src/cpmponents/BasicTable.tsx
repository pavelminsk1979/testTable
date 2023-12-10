import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import {BasicModal} from "./basicModal/BasicModal";
import {useState} from "react";
import {ContentOneRow} from "./contentOneRow/ContentOneRow";
import {SwitchComponent} from "./switchComponent/SwitchComponent";
import {HeadersTable} from "./headersTable/HeadersTable";
import {ContentTable} from "./contentTable/ContentTable";
import {DataContentTable, DataHeadersTable} from "../constants/constants";

type PropsType = {
    dataHeadersTable: DataHeadersTable[]
    dataContentTable: DataContentTable[]
    changeArrowDirection: (id: string, arrowDirection: boolean, name: string) => void
}

export const BasicTable = ({dataHeadersTable, dataContentTable, changeArrowDirection}: PropsType) => {
    const [positionModal, setPositionModal] = useState(false);

    const [currentImg, setCurrentImg] = useState('')

    const [contentOneRow, setContentOneRow] = useState<DataContentTable[]>([{
        id: '',
        img: '',
        name: '',
        date: '',
        number: 0
    }])

    const [isDarkBackgroundColor, setIsDarkBackgroundColor] = useState(false)


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
        const contentOneRow = dataContentTable.filter(row => row.id === id)
        setContentOneRow(contentOneRow)
    }

    const handleArrowDirection = (id: string, arrowDirection: boolean, name: string) => {
        changeArrowDirection(id, arrowDirection, name)
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
                {!currentImg && <ContentOneRow contentOneRow={contentOneRow[0]}/>}
            </BasicModal>

            <TableContainer component={Paper} style={{backgroundColor: isDarkBackgroundColor ? '#6f6f6f' : '#d1d1b2'}}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <HeadersTable dataHeadersTable={dataHeadersTable} handleArrowDirection={handleArrowDirection}/>
                    </TableHead>
                    <ContentTable
                        dataContentTable={dataContentTable}
                        handleOpenModal={handleOpenModal}
                        handleOnClickTableRow={handleOnClickTableRow}/>

                </Table>
            </TableContainer>
        </div>
    );
}

