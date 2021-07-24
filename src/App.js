import React, { useState, useEffect } from 'react';
import './css/App.css';
import Background from './Background';
import Timer from './Timer';
import Chirp from './chirp.ogg';

function App() {
    const initialSeconds = 1500;
    const audioObj = new Audio(Chirp);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [workSeconds, setWorkSeconds] = useState(1500);
    const [breakSeconds, setBreakSeconds] = useState(300);
    const [isRunning, setIsRunning] = useState(false);
    const [isWorkTime, setIsWorkTime] = useState(true);
    const [message ,setMessage] = useState("Ready to work?");
    function time(seconds) {
            let minsFormatted = Math.floor(seconds / 60);
            let secsFormatted = seconds % 60;
            secsFormatted = secsFormatted.toString();
            minsFormatted = minsFormatted.toString();
            return minsFormatted.padStart(2,'0') + ":" + secsFormatted.padStart(2,'0');

    }
    function startTimer() {
        setIsRunning(true);
        document.querySelector('.timer-wrapper').classList.add("timerAnimated");
        if (isWorkTime == true) {
            setMessage("Keep up the good work!");
        } else {
            setMessage("Enjoy your break.");
        }
    }
    function stopTimer() {
        setIsRunning(false);
        document.querySelector('.timer-wrapper').classList.remove("timerAnimated");
    }
    function resetTimer() {
        setIsRunning(false);
        document.querySelector('.timer-wrapper').classList.remove("timerAnimated");
        if (isWorkTime === true) {
            setSeconds(workSeconds);
            setMessage("Ready to work?")
        } else {
            setSeconds(breakSeconds);
            setMessage("Enjoy your break.")
        }
    }
    function takeBreak() {
        setIsWorkTime(false)
        document.querySelector('.timer-wrapper').classList.add("break-time");
        setSeconds(breakSeconds);
        setMessage("Enjoy your break.");
    }
    function goWork() {
        setIsWorkTime(true)
        document.querySelector('.timer-wrapper').classList.remove("break-time");
        setSeconds(workSeconds);
        setMessage("Ready to work?");

    }
    useEffect(() => {
        if (audioObj !== undefined && seconds === 0) {
            audioObj.play();
        }
        if (isWorkTime === true && seconds === 0) {
            setMessage("Good job!");
        }
        if (isWorkTime === false && seconds == 0) {
            setMessage("Time to get back to work.");
        }
        if (isWorkTime === true) {
            document.querySelectorAll('.buttons').forEach((item) => item.classList.remove("buttons-break"));
        } else {
            document.querySelectorAll('.buttons').forEach((item) => item.classList.add("buttons-break"));
        }
        if (isRunning === true && seconds > 0) {
            let interval = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
            return () => clearInterval(interval);
            }

    },[seconds, isRunning, isWorkTime]);
        return (
            <div className="flex-container">
                <Timer message={message} seconds={seconds} time={time} />
                <div className="buttons-wrapper">
                    {isRunning || <button onClick={startTimer} className="buttons">start timer</button>}
                    {isRunning && <button onClick={stopTimer} className="buttons">stop timer</button>}
                    <button onClick={resetTimer} className="buttons">reset timer</button>
                    {isWorkTime && <button onClick={takeBreak} className="buttons">Take a Break</button>}
                    {isWorkTime || <button onClick={goWork} className="buttons">Get Back to Work</button>}

                </div>
                <Background />

            </div>
        )


}


export default App;
