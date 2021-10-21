import React from 'react';
// import PropTypes from 'prop-types';

function TimePicker({taskTime, setTaskTime, breakTime, setBreakTime}) {
  // const [taskTime, setTaskTime] = useState(25);
  // const [breakTime, setBreakTime] = useState(5)

  return (
    <form>
      <label for="tTime">Task time(seconds):</label>
      <input
        type="number"
        id="tTime"
        name="tTime"
        value={taskTime}
        onChange={(event) => setTaskTime(event.target.value)}
      />
      <label for="bTime">Break time(seconds):</label>
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