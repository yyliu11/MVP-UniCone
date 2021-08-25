import React from 'react';
import ReactDOM from 'react-dom';

let Homepage = (props) => {

  return (
    <div>
      <h1>Welcome<img id='icon' src='https://image.freepik.com/free-vector/cute-unicorn-vector-icecream-suit_70350-55.jpg'></img></h1>
      <p>Customize your own ice cream creation!</p>
      <img id='ice-cream' src='http://images4.fanpop.com/image/photos/17800000/Yum-Yum-ice-cream-17847731-617-775.jpg'></img>
      <div><button id='btn' onClick={() => {props.toggleHomepage();props.toggleCone()}}>Tap to begin</button></div>
    </div>
  )
};

export default Homepage;