import { DateType } from "~/types";
import { convertDate } from "./convertDate";

export const getDatesInMonth = (data: DateType) => {
    const date = convertDate(data, 1);
    const days: number[] = [];

    while (date.getMonth() === data.month - 1) {
        const num = date.getDate();
        days.push(num);
        date.setDate(num + 1);
    }

    return days;
}