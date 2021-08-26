import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';

let ChooseTopping = (props) => {

  const [images, setImages] = useState([
    {id: 1, name:'Berries', url:'https://i.postimg.cc/qvVxyBXR/berries.png'},
    {id: 2, name:'Gummy bears', url:'https://i.postimg.cc/GhYSZ5X4/gummybears.png'},
    {id: 3, name:'M&Ms', url:'https://i.postimg.cc/QMPQNXth/m-ms.png'},
  ]);
  const [topping, setTopping] = useState('');
  const [select, setSelect] = useState(false);


  return (
    <>
    <div className='block'></div>
      <div className='step'>STEP 4</div>
      <span onClick={() => {props.toggleSauce();props.toggleTopping();}} className='left-arrow'>〈</span>
      <span id='choose'><strong>Choose Topping</strong></span>
      <span className='right-arrow' onClick={() => {props.toggleReview();props.toggleTopping();}}>〉</span>
      <div id='carousel'>
      <Carousel>
        {images.map(image => <div key={image.id}><img id='cone-img' src={image.url}></img><div id='cone-name'>{image.name}</div>
        {select === false ? <div><button className='circle' onClick={(e) => {e.preventDefault();setTopping(image.name);setSelect(true);props.setOrder(prevState => ({...prevState, topping: {topping_name: image.name, img_url: image.url, qty: 1}}))}}></button><span className='select'>Select</span></div> : null}
        </div>)}
      </Carousel>
      {select === true ? <div><button className='full-circle' onClick={() => {setSelect(false);props.setOrder(prevState => ({...prevState, topping: {topping_name: '', img_url: '', qty: 0}}))}}>✓</button><span className='selected'>Selected {topping}</span></div> : null}
      </div>
    </>
  )
};

export default ChooseTopping;