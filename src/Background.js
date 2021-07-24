import React from 'react';
import rainyDay from './rainy-day.mp4';
import './css/Background.css';

function Background() {
    return (
        <div>
        <video autoPlay loop muted className="rain-video">
            <source src={rainyDay} type="video/mp4" />
        </video>
    </div>
    )
}

export default Background;
