import React, { useState, useEffect } from 'react';
import Background from './Background';
import Timer from './Timer';
import Chirp from './chirp.ogg';

function App() {
    const initialSeconds = 1500;
    const [seconds, setSeconds] = useState(initialSeconds);
    const [workTime, setWorkTime] = useState(1500);
    const [breakTime, setBreakTime] = useState(300);
    const [isRunning, setIsRunning] = useState(false);
    const [isWorkTime] = useState(false);
    const [workStatus, setWorkStatus] = useState("start");
    const time = (seconds) => {
            let minsFormatted = Math.floor(seconds / 60);
            let secsFormatted = seconds % 60;
            secsFormatted = secsFormatted.toString();
            minsFormatted = minsFormatted.toString();
            return minsFormatted.padStart(2,'0') + ":" + secsFormatted.padStart(2,'0');

    }
    const audioObj = new Audio(Chirp);

    function startTimer() {
        setIsRunning(true);
        document.querySelector('.timer-wrapper').classList.add("timerAnimated");
    }
    function stopTimer() {
        setIsRunning(false);
        document.querySelector('.timer-wrapper').classList.remove("timerAnimated");
    }
    function resetTimer() {
        setIsRunning(false);
        setSeconds(initialSeconds);
        document.querySelector('.timer-wrapper').classList.remove("timerAnimated");
    }
    useEffect(() => {
        if (isRunning === true && seconds > 0) {
            let interval = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
            return () => clearInterval(interval);
            }
        if (audioObj !== undefined && seconds === 0) {
            audioObj.play();
        }

    },[seconds, isRunning]);
        return (
            <div className="flex-container">
                <Timer seconds={seconds} time={time} />
                <div className="buttonsWrapper">
                    {isRunning || <button onClick={startTimer}>start timer</button>}
                    {isRunning && <button onClick={stopTimer}>stop timer</button>}
                    <button onClick={resetTimer}>reset timer</button>
                </div>
                <Background />

            </div>
        )


}


export default App;
