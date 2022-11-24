import { DateType } from "~/types";

export const inputToDate = (input: string): DateType => {
    const data = input.split('.');

    return {
        day: Number(data[0]),
        month: Number(data[1]),
        year: Number(data[2]),
    };
}