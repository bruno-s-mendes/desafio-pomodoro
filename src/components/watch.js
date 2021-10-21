import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../style/watch.css';
import finished from '../resources/finished.mp3'

function Clock({ countDownTime, breakTime }) {
  const [time, setTime] = useState(countDownTime);
  const [bTime, setBTime] = useState(breakTime);
  const [isBreak, setIsBreak] = useState(false);
  const [breakClass, setBreackClass] = useState('regular');
  const [timerPhrase, setTimerPhrase] = useState('Task remaining time')
  const [pause, setPause] = useState(true);
  const [showTime, setShowTime] = useState();

  const setTimetoDate = (value) => {
    const date = new Date();
    date.setSeconds(value);
    const seconds = date.getSeconds();
    setShowTime(seconds);
  }

  useEffect(() => {
    if(isBreak){
      setTimerPhrase('Break remaining time')
      return setBreackClass('break');

    } else {
      setTimerPhrase('Task remaining time')
      return setBreackClass('regular');
    }
  }, [breakClass, isBreak])

  useEffect(() => {
    return setTimetoDate(time);
  }, [time])

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time -1);
    }, 1000);
    const audio = new Audio(finished);
    if (time === 0 && !isBreak) {
        setTime(bTime);
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
  },[time, isBreak, pause, bTime]);

  const restart = () => {
    setPause(true);
    setTime(25);
    setBTime(5)
    setIsBreak(false);
  }

  const set = () => {
    setPause(true);
    setTime(countDownTime);
    setBTime(breakTime)
    setIsBreak(false);
  }

  return (
    <div className='clock'>
      <div className='top-btn-container'>
        <button
          className='top-btn'
          type="button"
          onClick={ () => set() }
          >
        Set
        </button>
        <button
          className='top-btn'
          type="button"
          onClick={ () => restart() }
        >
        Reset
        </button>
      </div>
    <button
      className={`timeDisplay ${breakClass}`}
      type="button"
    >
    { `${timerPhrase} ${showTime} seconds`}
    </button>
    <button
      id='startPauseBTN'
      type="button"
      onClick={ () => setPause(!pause) }
    >
    Start/Pause
    </button>
    </div>
  );
}

Clock.propTypes = {
  countDownTime: PropTypes.number.isRequired,
};

export default Clock;