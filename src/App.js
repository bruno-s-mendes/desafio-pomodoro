import './style/App.css';
import React, { useState } from 'react';
import TimePicker from './components/timePicker';
import Clock from './components/watch';


function App() {
  const [taskTime, setTaskTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5)
  return (
    <div className="App">
      <h1 className="title">Pomodoro Timer</h1>
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
