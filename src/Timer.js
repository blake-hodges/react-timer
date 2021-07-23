import React, { useState } from 'react';

function Timer(props) {
        return (
            <div className="timer-wrapper">
                <p className="time-text">{props.time(props.seconds)}</p>
                <p className="timer-message">{props.message}</p>
            </div>
        )
}



export default Timer;
