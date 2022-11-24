import { DateType } from "~/types";
import { getDatesInMonth, getFirstDayInMonth } from "~/utils";
import { CalendarHeader } from "./CalendarHeader";

type Props = {
    date: DateType;
    changeMonth?: (num: 1 | -1) => void;
}

const DAYS_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

export const Calendar = ({ date, changeMonth }: Props) => {
    const datesInMonth = getDatesInMonth(date);
    const firstDay = getFirstDayInMonth(date);

    const headerDays = DAYS_NAMES.map(day => (
        <div key={day}>
            {day}
        </div>
    ));

    const daysBase = datesInMonth.map((date, idx) => (
        <div key={`date-${date}-${idx}`}>
            {date}
        </div>
    ));

    const fillStart = new Array(firstDay).fill(0).map((_, idx) => <div key={idx} />);

    const days = fillStart.concat(daysBase);

    return (
        <div className="w-80 h-96 bg-red-500 rounded-2xl px-3 pt-4 pb-6">
            <CalendarHeader
                date={date}
                changeMonth={changeMonth}
            />
            <div className="grid grid-cols-7 mt-8">
                {headerDays}
                {days}
            </div>
        </div>
    );
}