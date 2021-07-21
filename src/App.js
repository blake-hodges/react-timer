import React, { useState, useEffect } from 'react';
import Background from './Background';

function App() {
    const [seconds, setSeconds] = useState(1500);
    const [isRunning, setIsRunning] = useState(false);
    const time = (seconds) => {
            let minsFormatted = Math.floor(seconds / 60);
            let secsFormatted = seconds % 60;
            secsFormatted = secsFormatted.toString();
            minsFormatted = minsFormatted.toString();
            return minsFormatted.padStart(2,'0') + ":" + secsFormatted.padStart(2,'0');

    }
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
        setSeconds(1500);
        document.querySelector('.timer-wrapper').classList.remove("timerAnimated");
    }
    useEffect(() => {
        if (isRunning == true && seconds > 0) {
            let interval = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
            return () => clearInterval(interval);
            }

    },[seconds, isRunning]);

    return (
        <div className="flex-container">
            <div className="timer-wrapper">
                <p className="time-text">{time(seconds)}</p>
            </div>
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
