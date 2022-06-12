import Head from 'next/head';
//import Link from 'next/link';
import style from '../styles/Layout.module.css';
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
            <header className={style.header}>
                {/*
                <Link href='/'>
                    <button type="button" className={style.backButton}>Back</button>            
                </Link>
                */}
            </header>
            <div className='content'>
                {children}
                <div id='whiteMask' className={style.whiteMask}></div>
            </div>
        </div>
    );
};

export default Layout;