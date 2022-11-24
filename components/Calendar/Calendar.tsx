import { DateType } from "~/types";
import { CalendarHeader } from "./CalendarHeader";

type Props = {
    date: DateType;
    changeMonth?: (num: 1 | -1) => void;
}

export const Calendar = ({ date, changeMonth }: Props) => {
    return (
        <div className="w-80 h-96 bg-red-500 rounded-2xl px-3 pt-4 pb-6">
            <CalendarHeader
                date={date}
                changeMonth={changeMonth}
            />
            <div>content</div>
        </div>
    );
}