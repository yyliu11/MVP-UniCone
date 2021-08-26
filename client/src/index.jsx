import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage.jsx';
import ChooseFlavor from './components/chooseFlavor.jsx';
import ChooseCone from './components/chooseCone.jsx';
import ChooseSauce from './components/chooseSauce.jsx';
import ChooseTopping from './components/chooseTopping.jsx';
import Review from './components/review.jsx';
const axios = require('axios');

let App = () => {
  const [homepage, setHomepage] = useState(true);
  const toggleHomepage = () => setHomepage(!homepage);
  const [chooseFlavor, setChooseFlavor] = useState(false);
  const toggleFlavor = () => setChooseFlavor(!chooseFlavor);
  const [chooseCone, setChooseCone] = useState(false);
  const toggleCone = () => setChooseCone(!chooseCone);
  const [chooseSauce, setChooseSauce] = useState(false);
  const toggleSauce = () => setChooseSauce(!chooseSauce);
  const [chooseTopping, setChooseTopping] = useState(false);
  const toggleTopping = () => setChooseTopping(!chooseTopping);
  const [review, setReview] = useState(false);
  const toggleReview = () => setReview(!review);
  const [order, setOrder] = useState({
    customer_name: '',
    order_at: '',
    cone: {
      cone_name: '',
      img_url: '',
      qty: 0
    },
    flavor: {
      flavor_name: '',
      img_url: '',
      qty: 0
    },
    sauce: {
      sauce_name: '',
      img_url: '',
      qty: 0
    },
    topping: {
      topping_name: '',
      img_url: '',
      qty: 0
    }
  });


    return (
      <>
      {homepage === true ? <Homepage toggleHomepage={toggleHomepage} toggleCone={toggleCone}/> : null}
      {chooseCone === true ? <ChooseCone toggleHomepage={toggleHomepage} toggleCone={toggleCone} toggleFlavor={toggleFlavor} setOrder={setOrder} /> : null}
      {chooseFlavor === true ? <ChooseFlavor toggleCone={toggleCone} toggleFlavor={toggleFlavor} toggleSauce={toggleSauce} setOrder={setOrder}/> : null}
      {chooseSauce === true ? <ChooseSauce toggleFlavor={toggleFlavor} toggleSauce={toggleSauce} toggleTopping={toggleTopping} setOrder={setOrder}/> : null}
      {chooseTopping === true ? <ChooseTopping toggleSauce={toggleSauce} toggleTopping={toggleTopping} toggleReview={toggleReview} setOrder={setOrder}/> : null}
      {review === true ? <Review toggleReview={toggleReview} order={order} toggleCone={toggleCone} toggleFlavor={toggleFlavor} toggleSauce={toggleSauce} toggleTopping={toggleTopping} /> : null}
      </>
    )

};

ReactDOM.render(<App />, document.getElementById('app'));