import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import rainyDay from './rainy-day.mp4';



// function App() {
//     const [val, setVal] = useState('25');
//     const [defaultSeconds, setDefaultSeconds] = useState(1500);
//     const [workTime, setWorkTime] = useState('25');
//     //const [breakTime, setBreakTime] = useState(5);
//     const [seconds, setSeconds] = useState(defaultSeconds);
//     const [isRunning, setIsRunning] = useState(false);
//
//     function calculateTime() {
//         if (seconds >= 1500) {
//             let minsFormatted = Math.floor(seconds / 60);
//             let secsFormatted = seconds % 60;
//             secsFormatted = secsFormatted.toString();
//             return minsFormatted + ":" + secsFormatted.padEnd(2,'0');
//         } else {
//             let minsFormatted = Math.floor(seconds / 60);
//             let secsFormatted = seconds % 60;
//             secsFormatted = secsFormatted.toString();
//             minsFormatted = minsFormatted.toString();
//             return minsFormatted.padStart(2,'0') + ":" + secsFormatted.padStart(2,'0');
//         }
//     }
//     function startTimer() {
//         setIsRunning(true);
//         document.querySelector('.timerWrapper').classList.add("timerAnimated");
//     }
//     function stopTimer() {
//         setIsRunning(false);
//         document.querySelector('.timerWrapper').classList.remove("timerAnimated");
//     }
//     function resetTimer() {
//         setSeconds(parseInt(val) * 60);
//         setIsRunning(false);
//         document.querySelector('.timerWrapper').classList.remove("timerAnimated");
//     }
//     function handleSubmit(e) {
//         e.preventDefault();
//         setSeconds(parseInt(val) * 60);
//     }
//     useEffect(() => {
//         if (isRunning == true && seconds > 0) {
//             let interval = setInterval(() => {
//                 setSeconds(seconds - 1);
//             }, 1000);
//             return () => clearInterval(interval);
//             }
//
//     },[seconds, isRunning]);

    //return (
        {/*<div className="flex-container">
            <div className="timerWrapper">
                <p className="timeText">{calculateTime()}</p>
            </div>
            <div className="buttonsWrapper">
                {isRunning || <button onClick={startTimer}>start</button>}
                {isRunning && <button onClick={stopTimer}>stop</button>}
                <button onClick={resetTimer}>reset</button>
                <button>settings</button>
                <div className="settings">
                    <h3>Settings</h3>
                    <form onSubmit={handleSubmit}>
                        <label>Work Time</label>
                        <input type="text" value={val} onChange={(e) => setVal(e.target.value)}></input>
                        <label>Break Time</label>
                        <input type="text" value="5"></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div>
                <video autoPlay loop muted className="rain-video">
                    <source src={rainyDay} type="video/mp4" />
                </video>
            </div>
        </div>*/}
    //)

//}







ReactDOM.render(<App />, document.getElementById('root'));
