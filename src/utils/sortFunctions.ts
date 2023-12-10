import {DataContentTable} from "../constants/constants";

export const sortByName = (copyData: DataContentTable[], arrowDirection: boolean): DataContentTable[] => {
    if (arrowDirection) {
        return copyData.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
    } else {
        return copyData.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1).reverse();
    }
}

export const sortByDate = (copyData: DataContentTable[], arrowDirection: boolean): DataContentTable[] => {
    if (arrowDirection) {
        return copyData.sort((a, b) => Number(a.date) - Number(b.date));
    } else {
        return copyData.sort((a, b) => Number(b.date) - Number(a.date));
    }
}

export const sortByNumber = (copyData: DataContentTable[], arrowDirection: boolean): DataContentTable[] => {
    if (arrowDirection) {
        return copyData.sort((a, b) => a.number - b.number);
    } else {
        return copyData.sort((a, b) => b.number - a.number);
    }
}