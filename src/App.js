
import './App.css';
import { useEffect, useState } from 'react';
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from './components/DurationExercise';
import StrengthExercise from './components/StrengthExercise';

function App() {

  const [selectedRepetitionExercise, setRepetitionExercise] = useState(null);
  const [selectedDurationExercise, setDurationExercise] = useState(null);
  const [selectedStrengthExercise, setStrengthExercise] = useState(null);

  if (selectedRepetitionExercise !== null) {
    return <RepetitionExercise exerciseId={selectedRepetitionExercise} goBack={() => setRepetitionExercise(null)} />;
  }

  if (selectedDurationExercise !== null) {
    return <DurationExercise exerciseId={selectedDurationExercise} goBack={() => setDurationExercise(null)} />;
  }

  if (selectedStrengthExercise !== null) {
    return <StrengthExercise exerciseId={selectedStrengthExercise} goBack={() => setStrengthExercise(null)} />;
  }

  return (
    <div>
      <h1 style={{ color: "#404040" }}>Go Do Something!</h1>

      <p style={{ fontSize: "2vh", textDecoration: "underline", color: "red" }}><strong>Select an Exercise:</strong></p>

      <p><strong>---- Repetition Exercises ----</strong></p>

      <button onClick={() => setRepetitionExercise('Push Ups')}>Push Ups</button><br></br>
      <button onClick={() => setRepetitionExercise('Jumping Jacks')}>Jumping Jacks</button><br></br>
      <button onClick={() => setRepetitionExercise('Sit Ups')}>Sit Ups</button>

      <p><strong>---- Duration Exercises ----</strong></p>

      <button onClick={() => setDurationExercise('Bicycling')}>Bicycling</button><br></br>
      <button onClick={() => setDurationExercise('Running')}>Running</button>

      <p><strong>---- Strength Exercises ----</strong></p>

      <button onClick={() => setStrengthExercise('Single Arm Dumbbells')}>Single Arm Dumbbells</button><br></br>
      <button onClick={() => setStrengthExercise('Two Arm Barbell')}>Two Arm Barbell</button>
    </div>
  );
}

export default App;