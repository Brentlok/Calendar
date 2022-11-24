import { DateType } from "~/types";

type Param = Date | DateType;

type ConvertDate<T> = T extends Date ? DateType : Date;

export const convertDate = <T extends Param>(date: T): ConvertDate<T> => (
    date instanceof Date
        ? {
            day: date.getDay(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
        } as ConvertDate<T>
        : new Date(date.year, date.month - 1, date.day) as ConvertDate<T>
);