import type { NextPage } from 'next';
import style from '../styles/Secret.module.css';
import { useEffect } from 'react';

const Secret: NextPage = () => {
    let actionButtons;
    let command: Array<number> = [];
    let lineList: { [key: string]: HTMLElement|null } = {};

    const COMMAND_LIST = [
        {
            class: 'lineA',
            command: [1, 3],
            showed: false
        },
        {
            class: 'lineB',
            command: [2, 3],
            showed: false
        },
        {
            class: 'lineC',
            command: [4, 3],
            showed: false
        }
    ];
    
    const COMMAND_LENGTH = 2;
    

    const onClickButton = (e: Event) => {
        const target = e.currentTarget as Element; 
        if(!target) return;
        const id = +(target.getAttribute('data-id') || 0);
        command.push(id);

        if(command.length > COMMAND_LENGTH) {
            command.shift();
        }

        if(command.length === COMMAND_LENGTH) {
            COMMAND_LIST.forEach((presetCmd) => {
                const isLine = !command.some((id, index) => {
                    return id !== presetCmd.command[index];
                });
                if(isLine) {
                    lineList[presetCmd.class]?.classList.add(style.lineShow);
                    presetCmd.showed = true;
                }
            });

            const isComplete = !COMMAND_LIST.some((command) => {
                return !command.showed;
            });

            if(isComplete) {
                const scrollWrapper = document.querySelector(`.${style.scrollWrapper}`);
                scrollWrapper?.classList.add(style.scrollWrapperSecret);
            }
        }

        
    };

    useEffect(() => {
        actionButtons = document.querySelectorAll(`.${style.actionButton}`);
        actionButtons.forEach((button) => {
            button.addEventListener('click', onClickButton);
        });
        COMMAND_LIST.forEach((command) => {
            lineList[command.class] = document.querySelector(`.${style[command.class]}`);
        });
    });

    return (
        <div>
            シークレット
            <div>すべての火遁を発動せよ</div>
            
            <div>ヒント</div>
            <div>
                火遁の発動方法<br />
                <br />
                地→天<br />
                or<br />
                人→天
            </div>
            
            <div className={style.scrollWrapper}>
                <div className={style.hotBar}>
                    <ul className={style.actionRow}>
                        <li className={style.actionButton}></li>
                        <li className={style.actionButton} data-id="1">人</li>
                    </ul>
                    <ul className={style.actionRow}>
                        <li className={style.actionButton} data-id="2">地</li>
                        <li className={style.actionButton}></li>
                        <li className={style.actionButton}></li>
                        <li className={style.actionButton} data-id="3">天</li>
                    </ul>
                    <ul className={style.actionRow}>
                        <li className={style.actionButton}></li>
                        <li className={style.actionButton} data-id="4">地</li>
                    </ul>
                    <div className={`${style.line} ${style.lineA}`}></div>
                    <div className={`${style.line} ${style.lineB}`}></div>
                    <div className={`${style.line} ${style.lineC}`}></div>
                    <div className={style.congratulations}>クリアおめでとう！！！</div>
                </div>
            </div>
        </div>
    )};

export default Secret;

