import { DateType } from "~/types";

export const dateToInput = (date: DateType) => {
    const day = String(date.day).padStart(2, '0');
    const month = String(date.month).padStart(2, '0');
    return `${(day)}.${month}.${date.year}`
}