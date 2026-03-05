import { useState } from "react";

function StrengthExercise({ exerciseId, goBack }) {

    const [weight, setWeight] = useState(0);
    const [repCount, setRepCount] = useState(0);
    const [input, setInput] = useState(1);
    const [sets, setNumber] = useState(0);

    return (
        <div>
            <p>{exerciseId}</p>
            <p>Weight: {weight} lbs</p>
            <p>Reps: {repCount}</p>
            <p>Sets: {sets}</p>

            <div className='buttons'>
                <label>
                    Increment: <input
                        placeholder='1'
                        onChange={(e) => {
                            const value = e.target.value;

                            if (value === "") {
                                setInput(1);
                                return;
                            }

                            if (isNaN(value)) {
                                alert("Please enter a number");
                                e.target.value = input;
                                return;
                            }

                            if (Number(value) === 0) {
                                e.target.value = input;
                                return;
                            }

                            setInput(value);
                        }}
                        style={{ width: `${Math.max(String(input).length, 1)}ch` }}></input>
                </label><br></br>
                
                <button className='weightButton' onClick={() => setWeight(weight + Number(input))}>Increase Weight (+{input})</button>
                <button className='weightButton'
                    onClick={() => {
                        if (weight - Number(input) < 0) {
                            setWeight(0);
                        } else {
                            setWeight(weight - Number(input));
                        }
                    }}>
                    Decrease Weight (-{input})</button>
                <button className='weightButton'
                    onClick={() => {
                        if (weight <= 0) {
                            setWeight(0);
                        } else {
                            setWeight(weight - 1);
                        }
                    }}>
                    Decrease Weight (-1)</button>
                <button className='weightButton' onClick={() => setWeight(0)}>Reset Weight</button>
                <button className='weightButton' onClick={() => setRepCount(repCount + 1)}>Complete Rep</button>
                <button className='weightButton' onClick={() => setRepCount(0)} >Reset Reps</button>
                <button className='weightButton' onClick={() => {

                    if (repCount > 0) {
                        setNumber(sets + 1);

                        let div = document.getElementById('emptyDiv');

                        let newDiv = document.createElement('div');
                        newDiv.className = 'newDiv';

                        const p1 = document.createElement('p');
                        p1.textContent = `Set ${sets + 1} Stats:`;

                        const p2 = document.createElement('p');
                        p2.textContent = `Weight: ${weight} lbs`;

                        const p3 = document.createElement('p');
                        p3.textContent = `Reps Completed: ${repCount}`;

                        newDiv.appendChild(p1);
                        newDiv.appendChild(p2);
                        newDiv.appendChild(p3);
                        div.appendChild(newDiv);

                        setRepCount(0);
                    } else {
                        alert("Must complete at least one rep before logging sets")
                    }

                }}>Complete Set</button>
                <button className='weightButton' onClick={() => {
                    let emptyDiv = document.getElementById('emptyDiv');

                    emptyDiv.innerHTML = "";
                    setNumber(0);
                }} >Reset Sets</button>
                <button className='weightButton' onClick={goBack}>Return</button>
            </div>
            <div id="emptyDiv"></div>
        </div>
    )
}

export default StrengthExercise;