import type { NextPage } from 'next';
import { useEffect } from 'react';
import style from '../styles/Eye.module.css';
import LayoutStyle from '../styles/Layout.module.css';

const FACINGMODE = {
    FRONT: 'user',
    REAR: { exact: 'environment' }
};

const Eye: NextPage = () => {
    let video : HTMLMediaElement;
    let isFromtCamera = false;
    let isErrored = false;

    const stopVideo = () => {
        const stream = video.srcObject as MediaStream;
        if(!stream) return;
        stream.getTracks().forEach(track => track.stop());
    };

    const updateCamera = () => {
        navigator.mediaDevices.getUserMedia(
            {
                audio: false,
                video: {
                    facingMode: isFromtCamera ? FACINGMODE.FRONT : FACINGMODE.REAR
                }
            }).then(function(stream) {
                isErrored = false;
                video.srcObject = stream;
                // videoのメタデータの取得が成功
                video.addEventListener('loadedmetadata', function (event) {
                    video.play();
                });
       
            }).catch(function(err) {
                console.log('The following error occurred: ', err);

                // パーミッションエラーなら隠し表示
                if(err.message.includes('Permission denied') || err.message.includes('denied permission.')) {
                    return;
                }

                // エラー2回目なら抜ける
                if(isErrored) return;
                isErrored = true; 

                // 指定のカメラがないエラーなら切り替えてみる
                if(err.name === 'OverconstrainedError' && err.constraint === 'facingMode') {
                    toggleCamera();
                }
            }
         );
    };

    useEffect(()=>{
        const mask = document.querySelector('#whiteMask');
        mask?.classList.remove(LayoutStyle.whiteMaskShow);
        video = document.querySelector('#video') as HTMLMediaElement;
        if(!video) return;
        updateCamera();
    }, []);

    const toggleCamera = () => {
        stopVideo();
        isFromtCamera = !isFromtCamera;
        updateCamera();
    };

    return (
        <div className={style.eye}>
            <div className={style.videoWrapper}>
                <video id="video" className={style.video}></video>
            </div>
            <button type="button" className={style.changeButton} onClick={toggleCamera}>カメラ切り替え</button>
            <div className={style.frame}></div>
        </div>
    );
};

export default Eye;