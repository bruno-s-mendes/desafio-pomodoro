import React from 'react';
import '../style/timePicker.css';

function TimePicker({taskTime, setTaskTime, breakTime, setBreakTime}) {
  return (
    <form className='timePicker'>
      <label htmlFor="tTime">Task time(seconds):</label>
      <input
        type="number"
        id="tTime"
        name="tTime"
        value={taskTime}
        onChange={(event) => setTaskTime(event.target.value)}
      />
      <label htmlFor="bTime">Break time(seconds):</label>
      <input
        type="number"
        id="bTime"
        name="bTime"
        value={breakTime}
        onChange={(event) => setBreakTime(event.target.value)}
      />
    </form>
  );
}

export default TimePicker;