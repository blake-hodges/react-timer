import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import rainyDay from './rainy-day.mp4';

function App() {
    const [seconds, setSeconds] = useState(1500);
    const [minutes, setMinutes] = useState(seconds / 60);
    const [isRunning, setIsRunning] = useState(false);
    const time = () => {
        if (seconds >= 1500) {
            let minsFormatted = seconds / 60;
            let secsFormatted = seconds % 60;
            secsFormatted = secsFormatted.toString();
            return minsFormatted + ":" + secsFormatted.padEnd(2,'0');
        } else {
            let minsFormatted = Math.floor(seconds / 60);
            let secsFormatted = seconds % 60;
            secsFormatted = secsFormatted.toString();
            minsFormatted = minsFormatted.toString();
            return minsFormatted.padStart(2,'0') + ":" + secsFormatted.padStart(2,'0');

        }
    }
    function startTimer() {
        setIsRunning(true);
        document.querySelector('.timerWrapper').classList.add("timerAnimated");
    }
    function stopTimer() {
        setIsRunning(false);
        document.querySelector('.timerWrapper').classList.remove("timerAnimated");
    }
    function resetTimer() {
        setSeconds(1500)
        setIsRunning(false);
        document.querySelector('.timerWrapper').classList.remove("timerAnimated");
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
            <div className="timerWrapper">
                <p className="timeText">{time()}</p>
            </div>
            <div className="buttonsWrapper">
                <button onClick={startTimer}>start timer</button>
                <button onClick={stopTimer}>stop timer</button>
                <button onClick={resetTimer}>reset timer</button>
            </div>
            <div>
                <video autoPlay loop muted className="rain-video">
                    <source src={rainyDay} type="video/mp4" />
                </video>
            </div>
        </div>
    )

}




ReactDOM.render(<App />, document.getElementById('root'));
