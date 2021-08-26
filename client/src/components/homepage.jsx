import React from 'react';
import ReactDOM from 'react-dom';

let Homepage = (props) => {

  return (
    <div>
      <h1>Welcome<img id='icon' src='https://st3.depositphotos.com/1007566/34612/v/380/depositphotos_346120650-stock-illustration-cute-unicorn-ice-cream-isolated.jpg'></img></h1>
      <p>Customize your own ice cream creation!</p>
      <img id='ice-cream' src='https://i.postimg.cc/L8pd8156/icecream.jpg'></img>
      <div><button id='btn' onClick={() => {props.toggleHomepage();props.toggleCone()}}>Tap to begin</button></div>
    </div>
  )
};

export default Homepage;