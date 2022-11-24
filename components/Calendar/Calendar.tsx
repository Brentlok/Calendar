import { DateType } from "~/types";
import { getDatesInMonth, getFirstDayInMonth } from "~/utils";
import { CalendarHeader } from "./CalendarHeader";

type Props = {
    date: DateType;
    changeMonth?: (num: 1 | -1) => void;
    changeDate?: (num: number) => void;
    currentDate?: number;
    maxYear?: number;
    minYear?: number;
}

const DAYS_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

export const Calendar = (props: Props) => {
    const { date, changeMonth, changeDate, currentDate } = props;
    const datesInMonth = getDatesInMonth(date);
    const firstDay = getFirstDayInMonth(date);

    const headerDays = DAYS_NAMES.map(day => (
        <div key={day} className="calendar-cell">
            {day}
        </div>
    ));

    const daysBase = datesInMonth.map((date, idx) => (
        <div
            className="calendar-cell cursor-pointer border-black hover:border-2"
            data-is-active={idx === currentDate}
            key={`date-${date}-${idx}`}
            onClick={() => changeDate?.(idx)}
        >
            {date}
        </div>
    ));

    const fillStart = new Array(firstDay)
        .fill(0).map((_, idx) => <div key={idx} className="calendar-cell" />);

    const days = fillStart.concat(daysBase);

    return (
        <div className="w-80 h-96 rounded-2xl px-3 pt-4 pb-6 shadow-md">
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