import React, { useState } from 'react';
import { BasicTable } from "./cpmponents/BasicTable";
import st from './App.module.css'
import { DATA_CONTENT_TABLE, DATA_HEADERS_TABLE, DataContentTable, DataHeadersTable } from "./constants/constants";
import { sortByName, sortByDate, sortByNumber } from './utils/sortFunctions';

function App() {

    const [dataHeadersTable, setDataHeadersTable] = useState<DataHeadersTable[]>(DATA_HEADERS_TABLE);

    const [dataContentTable, setDataContentTable] = useState<DataContentTable[]>(DATA_CONTENT_TABLE);

    const copyData = dataContentTable.map(e => ({ ...e }));

    const sortField = (field: string, arrowDirection: boolean) => {
        let sortedData = [...copyData];

        if (field === 'name') {
            sortedData = sortByName(sortedData, arrowDirection);
        } else if (field === 'date') {
            sortedData = sortByDate(sortedData, arrowDirection);
        } else if (field === 'number') {
            sortedData = sortByNumber(sortedData, arrowDirection);
        }

        setDataContentTable(sortedData);
    };

    const changeArrowDirection = (id: string, arrowDirection: boolean, name: string) => {
        setDataHeadersTable(dataHeadersTable.map(el => el.id === id ? { ...el, arrowDirection: !arrowDirection } : el));

        if (name === 'Наименование') {
            sortField('name', arrowDirection);
        } else if (name === 'Дата') {
            sortField('date', arrowDirection);
        } else if (name === 'Номер') {
            sortField('number', arrowDirection);
        }
    };

    return (
        <div className={st.main}>
            <BasicTable
                dataHeadersTable={dataHeadersTable}
                dataContentTable={dataContentTable}
                changeArrowDirection={changeArrowDirection}
            />
        </div>
    );
}
export default App;