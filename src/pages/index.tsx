import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import style from '../styles/Index.module.css';
import LayoutStyle from '../styles/Layout.module.css';

const Home: NextPage = () => {
    let touchTimer: NodeJS.Timer;
    const router = useRouter();

    const onLongTouchEnd = () => {
        const mask = document.querySelector('#whiteMask');
        mask?.classList.add(LayoutStyle.whiteMaskShow);
        mask?.addEventListener('transitionend', () => {
            router.push('/eye');
        });
    };

    const onTouchStartLignt = () => {
        clearTimeout(touchTimer);
        touchTimer = setTimeout(onLongTouchEnd, 5000);
    };

    const onTouchEndLight = () => {
        clearTimeout(touchTimer);
    };

    useEffect(()=>{
        setTimeout(() => {
            const text = document.querySelector('#lightText') as HTMLElement;
            if(!text) return;
            text.innerHTML = '光に触れ、念じ続けるのです...';
        }, 5000)
    }, []);

    return (
        <div>
            <h1 className={style.lightText} id='lightText'>聞いて…感じて…考えて…</h1>
            <div className={style.light} onTouchStart={onTouchStartLignt} onTouchEnd={onTouchEndLight}></div>
        </div>
    );
};

export default Home;