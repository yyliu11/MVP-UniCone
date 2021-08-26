import React from 'react';
import ReactDOM from 'react-dom';

let Review = (props) => {
console.log()
  return (
    <>
    <h3 id='review'>Review</h3>
    <div className='container'>
      <img src={props.order.cone.img_url} className='select-img'></img>
      <a className='select-name'>{props.order.cone.cone_name}</a>
      <a className='qty'>Qty:&nbsp;&nbsp;{props.order.cone.qty}</a>
      <a className='review-right-arrow' onClick={() => {props.toggleCone();props.toggleReview();}}>〉</a>
    </div>
    <div className='container'>
      <img src={props.order.flavor.img_url} className='select-img'></img>
      <span className='select-name'>{props.order.flavor.flavor_name}</span>
      <a className='qty'>Qty:&nbsp;&nbsp;{props.order.flavor.qty}</a>
      <span className='review-right-arrow' onClick={() => {props.toggleFlavor();props.toggleReview();}}>〉</span>
    </div>
    <div className='container'>
      <img src={props.order.sauce.img_url} className='select-img'></img>
      <span className='select-name'>{props.order.sauce.sauce_name}</span>
      <a className='qty'>Qty:&nbsp;&nbsp;{props.order.sauce.qty}</a>
      <span className='review-right-arrow' onClick={() => {props.toggleSauce();props.toggleReview();}}>〉</span>
    </div>
    <div className='container'>
      <img src={props.order.topping.img_url} className='select-img'></img>
      <span className='select-name'>{props.order.topping.topping_name}</span>
      <a className='qty'>Qty:&nbsp;&nbsp;{props.order.topping.qty}</a>
      <span className='review-right-arrow' onClick={() => {props.toggleTopping();props.toggleReview();}}>〉</span>
    </div>
    <div><button id='btn' onClick={() => {props.toggleReview();}}>Confirm</button>
      </div>
    </>
  )
};

export default Review;