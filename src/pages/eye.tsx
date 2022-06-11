import type { NextPage } from 'next';
import { useEffect } from 'react';
import style from '../styles/Eye.module.css';

const Eye: NextPage = () => {
    useEffect(()=>{
        console.log('useEffectが実行されました');

        const video = document.querySelector('#video') as HTMLMediaElement;
        if(!video) return;

        navigator.mediaDevices.getUserMedia(
            {
                audio: false,
                video: {
                    //facingMode: 'user'
                    //facingMode: { exact: 'environment' }
                }
            }).then(function(stream) {
                video.srcObject = stream;
                // videoのメタデータの取得が成功
                video.addEventListener('loadedmetadata', function (event) {
                    console.log('loadedmetadata');
                    video.play();
                });
       
            }).catch(function(err) {
               console.log("The following error occurred: " + err);
            }
         );
    }, []);

    return (
        <div>
            <h1>Eye</h1>
            <video id="video" className={style.video}></video>
        </div>
    );
};

export default Eye;