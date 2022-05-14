import Head from 'next/head';
import Link from 'next/link';
import '../styles/Layout.module.css';
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Head>
                <title>Mistery Phoenix</title>
            </Head>

            <header className=''>
            </header>

            <div className='content'>{children}</div>

            <footer className=''>
                <Link href='/'>
                    <a>タイトルに戻る</a>
                </Link>
            </footer>
        </div>
    );
};

export default Layout;