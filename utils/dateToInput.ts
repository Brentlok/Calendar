import { DateType } from "~/types";

export const dateToInput = (date: DateType) => `${date.day}.${date.month}.${date.year}`;