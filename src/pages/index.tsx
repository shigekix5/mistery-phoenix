import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import style from '../styles/Index.module.css';
import LayoutStyle from '../styles/Layout.module.css';

const Home: NextPage = () => {
    let touchTimer: NodeJS.Timer;
    const router = useRouter();
    let light: HTMLElement;

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
        light.classList.add(style.lightActive);
    };

    const onTouchMoveignt = (e: any) => {
        e.preventDefault();
    };

    const onTouchEndLight = () => {
        light.classList.remove(style.lightActive);
        clearTimeout(touchTimer);
    };

    useEffect(()=>{
        setTimeout(() => {
            const text = document.querySelector('#lightText') as HTMLElement;
            if(!text) return;
            text.innerHTML = '光に触れ、念じ続けるのです...';
        }, 5000);

        light = document.querySelector(`.${style.light}`) as HTMLElement;
        if(!light) return;
        light.addEventListener('touchstart', onTouchStartLignt);
        light.addEventListener('touchmove', onTouchMoveignt);
        light.addEventListener('touchend', onTouchEndLight);
    }, []);

    return (
        <div>
            <h1 className={style.lightText} id='lightText'>聞いて…感じて…考えて…</h1>
            <div className={style.light}></div>
        </div>
    );
};

export default Home;