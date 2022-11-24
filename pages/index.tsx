import { useState } from 'react';
import { Calendar, DateInput } from '~/components';
import { changeMonth, convertDate } from '~/utils';

const Home = () => {
    const [date, setDate] = useState(convertDate(new Date()));
    const [dateNum, setDateNum] = useState<number>();

    const handleMonthChange = (num: 1 | -1) => {
        setDateNum(undefined);
        const newDate = changeMonth(date, num);
        setDate(newDate);
    }

    const handleDateChange = (num: number) => {
        setDateNum(num);
        setDate({ ...date, day: num + 1 });
    }

    return (
        <main className="w-full h-page grid place-items-center">
            <div className='flex flex-col gap-4'>
                <DateInput date={date} />
                <Calendar
                    date={date}
                    currentDate={dateNum}
                    changeMonth={handleMonthChange}
                    changeDate={handleDateChange}
                />
            </div>
        </main>
    );
};

export default Home;
