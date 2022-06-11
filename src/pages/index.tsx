import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <div>
            <h1>Mistery Phoenix</h1>

            <Link href='/eye'>
                <a>START</a>
            </Link>
        </div>
    );
};

export default Home;