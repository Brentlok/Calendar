import { useState } from 'react';
import { Calendar } from '~/components';
import { changeMonth, convertDate } from '~/utils';

const Home = () => {
    const [date, setDate] = useState(convertDate(new Date()));
    const [dateNum, setDateNum] = useState<number>();

    const handleMonthChange = (num: 1 | -1) => {
        setDateNum(undefined);
        const newDate = changeMonth(date, num);
        setDate(newDate);
    }

    const handleDateChange = (num: number) => setDateNum(num);

    return (
        <main className="w-full h-page grid place-items-center">
            <Calendar
                date={date}
                currentDate={dateNum}
                changeMonth={handleMonthChange}
                changeDate={handleDateChange}
            />
        </main>
    );
};

export default Home;
