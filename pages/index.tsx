import { useState } from 'react';
import { Calendar, DateInput } from '~/components';
import { changeMonth, convertDate } from '~/utils';
import type { DateType } from '~/types';

const MIN_YEAR = 2020;
const MAX_YEAR = 2030;

const Home = () => {
    const [error, setError] = useState('');
    const [date, setDate] = useState(convertDate(new Date()));
    const [dateNum, setDateNum] = useState<number>();

    const testErrorYear = (year: number) => {
        if (year > MAX_YEAR || year < MIN_YEAR) {
            setError(`Min year is ${MIN_YEAR}, max year is ${MAX_YEAR}`);
            return false;
        }

        return true;
    }

    const testErrorDate = (data: DateType) => {
        const testedDate = new Date(`${data.year}-${data.month}-${data.day}`);
        const test = !isNaN(testedDate.getDate());

        if (!test) {
            setError('Invalid date');
        }

        return test;
    }

    const handleMonthChange = (num: 1 | -1) => {
        const newDate = changeMonth(date, num);

        if (!testErrorYear(newDate.year)) {
            return;
        }

        setError('');
        setDateNum(undefined);
        setDate(newDate);
    }

    const dateChange = (num: number) => {
        setError('');
        setDateNum(num);
        setDate({ ...date, day: num + 1 });
    }

    const handleDateChange = (data: DateType) => {
        if (!testErrorYear(data.year) || !testErrorDate(data)) {
            return;
        }

        setError('');
        setDate(data);
        setDateNum(data.day - 1);
    }

    return (
        <main className="w-full h-page grid place-items-center">
            <div className='flex flex-col gap-4'>
                <DateInput
                    date={date}
                    setDate={handleDateChange}
                    dateNum={dateNum}
                />
                <Calendar
                    date={date}
                    currentDate={dateNum}
                    changeMonth={handleMonthChange}
                    changeDate={dateChange}
                    minYear={MIN_YEAR}
                    maxYear={MAX_YEAR}
                />
                <span className='text-center text-red-500'>{error}</span>
            </div>
        </main>
    );
};

export default Home;
