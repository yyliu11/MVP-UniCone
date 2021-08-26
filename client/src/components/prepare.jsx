import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const axios = require('axios');


const minuteSeconds = 60;
const hourSeconds = 3600;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {

  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;


let Prepare = (props) => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 40000; // use UNIX timestamp in seconds
  const remainingTime = endTime - stratTime;

  const checkReady =() => {
    var checking = setInterval(() => {
                     axios.get('http://localhost:5000/orders', {params: {customer_name: 'Emily Liu'}})
                           .then((res) => {
                             if (res.data[0].ready === false) {
                               console.log(res.data[0].ready);
                              clearInterval(checking);
                              props.togglePrepare();
                              props.togglePickup();
                            };
                          }
                        )
                           .catch(err => console.log(err))
    }, 10000);
  };
  checkReady();

  return (
    <>
    <h2 className='preparing'>Preparing Your Order...</h2>
    <CountdownCircleTimer
        {...timerProps}
        colors={[["#EF798A"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
        }
    </CountdownCircleTimer>
    </>
  )
  };

  export default Prepare;