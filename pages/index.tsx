import { useState } from 'react';
import { Calendar } from '~/components';
import { changeMonth, convertDate } from '~/utils';

const Home = () => {
    const [date, setDate] = useState(convertDate(new Date()));

    const handleChangeMonth = (num: 1 | -1) => {
        const newDate = changeMonth(date, num);
        setDate(newDate);
    }

    return (
        <main className="w-full h-page grid place-items-center">
            <Calendar
                date={date}
                changeMonth={handleChangeMonth}
            />
        </main>
    );
};

export default Home;
