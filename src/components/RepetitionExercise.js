import { useState } from 'react';

function RepetitionExercise({ exerciseId, goBack }) {

    const [repCount, setRepCount] = useState(0);

    return (
        <div>
            <p>{exerciseId}</p>
            <p>Reps: {repCount}</p>

            <div className='buttons'>
                <button className='repButton' onClick={() => setRepCount(repCount + 1)}>Complete Rep</button>
                <button className='repButton' onClick={() => setRepCount(0)} >Reset</button>
                <button className='repButton' onClick={goBack} >Return</button>
            </div>
        </div>
    );
}

export default RepetitionExercise;