import { Calendar } from '~/components';

const Home = () => {
    return (
        <main className="w-full h-page grid place-items-center">
            <Calendar date={{ year: 2022, day: 1, month: 3 }} />
        </main>
    );
};

export default Home;
