import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Clock({ countDownTime }) {
  // const history = useHistory();
  const [time, setTime] = useState(countDownTime);
  const [isBreak, setIsBreak] = useState(false)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time -1);
    }, 1000);
    if (time === 0 && !isBreak) {
        setTime(5);
        setIsBreak(!isBreak);
        return clearTimeout(timer);
    }
    if (time === 0 && isBreak) {
    return clearTimeout(timer);
  }
    if (pause === true) {
      return clearTimeout(timer);
    }
  },[time, isBreak, pause]);

  return (
    <button
      type="button"
      onClick={ () => setPause(!pause) }
    >
      <h4>{ time }</h4>
    </button>
  );
}

Clock.propTypes = {
  countDownTime: PropTypes.number.isRequired,
};

export default Clock;