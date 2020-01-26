import React from 'react';
import './App.css';
import './components/Utilities.css';

import Cleaner from './components/Cleaner'

function App() {
  return (
    <div className="App">
      <h1>YouTube SRT Cleaner</h1>
      <p>Paste in YouTube-generated .srt files and receive readable text. Happy birthday.</p>
      <Cleaner />
    </div>
  );
}

export default App;
