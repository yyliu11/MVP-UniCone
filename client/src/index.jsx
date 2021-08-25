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



    return (
      <>
      {homepage === true ? <Homepage toggleHomepage={toggleHomepage} toggleCone={toggleCone}/> : null}
      {chooseCone === true ? <ChooseCone toggleCone={toggleCone} toggleFlavor={toggleFlavor}/> : null}
      {chooseFlavor === true ? <ChooseFlavor toggleFlavor={toggleFlavor} toggleSauce={toggleSauce}/> : null}
      {chooseSauce === true ? <ChooseSauce toggleSauce={toggleSauce} toggleTopping={toggleTopping}/> : null}
      {chooseTopping === true ? <ChooseTopping toggleTopping={toggleTopping} toggleReview={toggleReview}/> : null}
      {review === true ? <Review toggleReview={toggleReview}/> : null}
      </>
    )

};

ReactDOM.render(<App />, document.getElementById('app'));