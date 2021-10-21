import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import finished from '../resources/finished.mp3'

function Clock({ countDownTime, breakTime }) {
  const [time, setTime] = useState(countDownTime);
  const [isBreak, setIsBreak] = useState(false)
  const [pause, setPause] = useState(true)
  const [showTime, setShowTime] = useState();

  const setTimetoDate = (value) => {
    const date = new Date();
    date.setSeconds(value);
    const seconds = date.getSeconds();
    setShowTime(seconds);
  }

  // const stopRoutine = () => {

  // }

  useEffect(() => {
    return setTimetoDate(time);
  }, [time])

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time -1);
    }, 1000);
    const audio = new Audio(finished);
    if (time === 0 && !isBreak) {
        setTime(breakTime);
        setIsBreak(!isBreak);
        audio.play();
        return clearTimeout(timer);
    }
    if (time === 0 && isBreak) {
    return clearTimeout(timer);
  }
    if (pause === true) {
      return clearTimeout(timer);
    }
  },[time, isBreak, pause, breakTime]);

  const restart = () => {
    setPause(true);
    setTime(countDownTime);
    setIsBreak(false);
  }

  return (
    <div>
          <button
      type="button"
      onClick={ () => restart() }
    >
      <h4>Set/Reset</h4>
    </button>
    <button
      type="button"
    >
      <h4>{ showTime }</h4>
    </button>
    <button
      type="button"
      onClick={ () => setPause(!pause) }
    >
      <h4>Start/Pause</h4>
    </button>
    </div>
  );
}

Clock.propTypes = {
  countDownTime: PropTypes.number.isRequired,
};

export default Clock;