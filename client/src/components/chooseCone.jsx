import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';


let ChooseCone = (props) => {
  const [images, setImages] = useState([
    {id: 1, name:'Fresh-Baked Waffle Cone', url:'https://i.postimg.cc/52GWFj5c/waffle-cone.png'},
    {id: 2, name:'Sugar Cone', url:'https://i.postimg.cc/3RtBd0pm/sugar-cone.png'},
    {id: 3, name:'Chocolate Dipped', url:'https://i.postimg.cc/6qRfzjgL/choco-dipped-cone.png'},
    {id: 4, name:'Kid Cone', url:'https://i.postimg.cc/SKsLHNHK/kid-cone.png'}
  ]);
  const [cone, setCone] = useState('');
  const [select, setSelect] = useState(false);


  return (
    <>
    <div className='block'></div>
      <div className='step'>STEP 1</div>
      <span onClick={() => {props.toggleCone();props.toggleHomepage();}} className='left-arrow'>〈</span>
      <span id='choose'><strong>Choose Cone</strong></span>
      <span className='right-arrow' onClick={() => {props.toggleCone();props.toggleFlavor();}}>〉</span>
      <div id='carousel'>
      <Carousel>
        {images.map(image => <div key={image.id}><img id='cone-img' src={image.url}></img><div id='cone-name'>{image.name}</div>
        {select === false ? <div><button className='circle' onClick={(e) => {e.preventDefault();setCone(image.name);setSelect(true);props.setOrder({cone: image.name})}}></button><span className='select'>Select</span></div> : null}
        </div>)}
      </Carousel>
      {select === true ? <div><button className='full-circle' onClick={() => {setSelect(false);}}>✓</button><span className='selected'>Selected {cone}</span></div> : null}
      </div>
    </>
  )
};

export default ChooseCone;