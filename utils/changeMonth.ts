import { DateType } from "~/types";
import { convertDate } from "./convertDate";

export const changeMonth = (date: DateType, num: 1 | -1) => () => {
    const newDate = convertDate(date);
    newDate.setMonth(newDate.getMonth() + num);
    return convertDate(newDate);
}