import { useState, useEffect } from 'react';

function DurationExercise({ exerciseId, goBack }) {

    const [time, setTime] = useState(0);

    const [isRunning, setRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    function formatTime(time) { //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        const milliseconds = time % 1000;

        return ( //https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_padding1
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0') + '.' +
            String(milliseconds).padStart(3, '0')
        );
    }

    return (
        <div>
            <p>{exerciseId}</p>
            <p>Timer: {formatTime(time)}</p>

            <div className='buttons'>
                <button className='durButton' onClick={() => setRunning(true)}>Start</button>
                <button className='durButton' onClick={() => setRunning(false)}>Stop</button>
                <button className='durButton' onClick={() => setTime(0)}>Reset</button>
                <button className='durButton' onClick={goBack}>Return</button>
            </div>
        </div>
    );
}

export default DurationExercise;