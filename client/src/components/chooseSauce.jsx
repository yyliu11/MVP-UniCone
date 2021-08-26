import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';

let ChooseSauce = (props) => {

  const [images, setImages] = useState([
    {id: 1, name:'chocolate', url:'https://i.postimg.cc/zG6Rmxvc/chocolate-sauce.png'},
    {id: 2, name:'Caramel', url:'https://i.postimg.cc/P5SnN7YS/caramel.png'},
  ]);
  const [sauce, setSauce] = useState('');
  const [select, setSelect] = useState(false);


  return (
    <>
    <div className='block'></div>
      <div className='step'>STEP 3</div>
      <span onClick={() => {props.toggleSauce();props.toggleFlavor();}} className='left-arrow'>〈</span>
      <span id='choose'><strong>Choose Sauce</strong></span>
      <span className='right-arrow' onClick={() => {props.toggleSauce();props.toggleTopping();}}>〉</span>
      <div id='carousel'>
      <Carousel>
        {images.map(image => <div key={image.id}><img id='cone-img' src={image.url}></img><div id='cone-name'>{image.name}</div>
        {select === false ? <div><button className='circle' onClick={(e) => {e.preventDefault();setSauce(image.name);setSelect(true);props.setOrder(prevState => ({...prevState, sauce: {sauce_name: image.name, img_url: image.url, qty: 1}}))}}></button><span className='select'>Select</span></div> : null}
        </div>)}
      </Carousel>
      {select === true ? <div><button className='full-circle' onClick={() => {setSelect(false);props.setOrder(prevState => ({...prevState, sauce: {sauce_name: '', img_url: '', qty: 0}}))}}>✓</button><span className='selected'>Selected {sauce}</span></div> : null}
      </div>
    </>
  )
};

export default ChooseSauce;