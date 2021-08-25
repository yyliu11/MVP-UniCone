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
  return (
    <>
    <div className='block'></div>
      <div className='step'>STEP 1</div>
      <h2 id='choose'>Choose Cone</h2>
      <div id='carousel'>
      <Carousel>
        {images.map(image => <div key={image.id}><img id='cone-img' src={image.url}></img><div id='cone-name'>{image.name}</div></div>)}
      </Carousel>
      </div>
    </>
  )
};

export default ChooseCone;