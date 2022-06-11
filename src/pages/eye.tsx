import type { NextPage } from 'next';
import { useEffect } from 'react';
import style from '../styles/Eye.module.css';

const FACINGMODE = {
    FRONT: 'user',
    REAR: { exact: 'environment' }
};

const Eye: NextPage = () => {
    let video : HTMLMediaElement;
    let isFromtCamera = false;
    let isErrored = false;

    const stopVideo = () => {
        video.pause();
        video.srcObject = null;
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
                    console.log('loadedmetadata');
                    video.play();
                });
       
            }).catch(function(err) {
                console.log('The following error occurred: ', err);
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
        console.log('useEffectが実行されました');
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
        <div>
            <h1>Eye</h1>
            <video id="video" className={style.video}></video>
            <button type="button" className={style.button} onClick={toggleCamera}>カメラ切り替え</button>
        </div>
    );
};

export default Eye;