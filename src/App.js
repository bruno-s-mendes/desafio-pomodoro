import './App.css';
import React, { useState } from 'react';
import TimePicker from './components/timePicker';
import Clock from './components/watch';


function App() {
  const [taskTime, setTaskTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5)
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TimePicker
        taskTime = {taskTime}
        setTaskTime = {setTaskTime}
        breakTime = {breakTime}
        setBreakTime = {setBreakTime}
      />
      <Clock
        countDownTime = {taskTime}
        breakTime = {breakTime}
      />
    </div>
  );
}

export default App;
