import React, { useState, useEffect } from 'react';
import BeatCounter from './Components/BeatCounter.js';
import NoteRow from './Components/NoteRow';
import './App.css';

function App() {
  const [beat, setBeat] = useState(1);
  const beatsInBar = 8;
  const tempo = 600;

  useEffect(() => {
    while (beat < beatsInBar) {
      setTimeout(() => {
        setBeat(beat + 1)
      }, tempo);
      return () => clearTimeout();
    }
    setTimeout(() => {
      setBeat(1);
    }, tempo);
    return () => clearTimeout();
  })
  return (
    <div className="App">
      <NoteRow beat={beat} note="E4" />
      <NoteRow beat={beat} note="D4" />
      <NoteRow beat={beat} note="C4" />
      <BeatCounter beat={beat} />
    </div>
  );
}

export default App;
