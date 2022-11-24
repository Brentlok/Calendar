import { DateType } from "~/types";
import { convertDate } from "./convertDate";

const DAYS = [6, 0, 1, 2, 3, 4, 5];

export const getFirstDayInMonth = (data: DateType) => DAYS[convertDate(data, 1).getDay()];