import React, { useState } from 'react';

function Timer(props) {
        return (
            <div className="timer-wrapper work-time">
                <p className="time-text">{props.time(props.seconds)}</p>
            </div>
        )
}



export default Timer;
