import React, {useState} from 'react';
import useInterval from '../../CustomsHooks/useInterval';

import play from '../../Assets/Images/play.svg';
import pause from '../../Assets/Images/pause.svg';
import soundTimeOut from '../../Assets/Sounds/ding-sound.mp3';

const Timer = () => {
    const delay = 1000;
    const audio = new Audio(soundTimeOut);

    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const [inputMinutes, setInputMinutes] = useState(0);
    const [inputSeconds, setInputSeconds] = useState(0);

    useInterval(() => {
        // Format timer title
        const secondsTimer = seconds >= 10 ? seconds : "0" + seconds;
        document.title = JSON.stringify(`⏳ Time left -> ${minutes} : ${secondsTimer} ☑️`);
        if(seconds > 0){
            setSeconds(seconds - 1);
        }
        if(seconds === 0){
            if(minutes <= 0){
                setIsRunning(false)
                document.title =  "⏰ Time out !!! ⏰";
                audio.play();
            }
            else{
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        }
    },
        // handle timer delay
        isRunning ? delay : null
    );

    const handleSubmitTimer = (e) => {
        e.preventDefault();
        if(inputSeconds){
            setMinutes(inputMinutes);
            if(inputSeconds === "00" || inputSeconds === "0")
                setSeconds(0);
            else
                setSeconds(inputSeconds);
            setIsRunning(true);
        }
        else{
            setIsRunning(true);
        }
    }

    const toggleRunning = () => {
        setIsRunning(!isRunning);
    }

    return (
        <div id="timer">
            <h2 className="title-part">Timer</h2>
            <form onSubmit={handleSubmitTimer}>
                <input placeholder="minutes" type="number" min="0" max="59" maxLength="2"  onChange={(e) => setInputMinutes(e.target.value)}/>
                <label>m</label>
                <input placeholder="seconds" type="number" min="0" max="59" maxLength="2"   onChange={(e) => setInputSeconds(e.target.value)}/>
                <label>s</label>
                <input className="start" type="submit" value="START" />
            </form>
            <div className="control-area">
                <h2 className="timer-print">{minutes} : {seconds >= 10 ? seconds : "0" + seconds}</h2>
                {
                    isRunning ? 
                    <div className="control-button play" onClick={() => { toggleRunning() }}>
                        <img src={pause} alt="pause" />
                    </div>
                    :
                    <div className="control-button pause" onClick={() => { toggleRunning() }}>
                        <img src={play} alt="play"/>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default Timer;