import './App.css';
import MainWindow from './MainWindow';
import React, { useState } from 'react';
import InfoWindow from './InfoWindow';
import Error from './Error';

function App() {
  let [arr, setArr] = useState([]);
  let [isTrue, setTrue] = useState(true);

  return (
    <div className="App">
      <MainWindow setTrue={setTrue} setArr={setArr} arr={arr} />
      {arr.length > 0 ? (
        <InfoWindow arr={arr} />
      ) : (
        <h1 style={{ color: 'white' }}>Empty</h1>
      )}
      {isTrue ? <Error setTrue={setTrue} /> : ''}
    </div>
  );
}

export default App;
