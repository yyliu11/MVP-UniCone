import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';

let ChooseTopping = (props) => {

  const [images, setImages] = useState([
    {id: 1, name:'Daiquiri Ice', description: 'If you put your ear up to this summery lime ice with a splash of rum flavoring, you can hear the ocean.', url:'https://i.postimg.cc/zfL6w8LP/Daiquiri-Ice.png'},
    {id: 2, name:'Chocolate', description: 'Extra rich, creamy, mind-blowing chocolate', url:'https://i.postimg.cc/wjMGHgkT/Chocolate.png'},
    {id: 3, name:'Raspberry Sorbet', description: 'Delicious raspberries from the Pacific Coast make this sorbet light and refreshing.', url:'https://i.postimg.cc/yx7LGHdK/Raspberry-Sorbet.png'},
    {id: 4, name:'Pineapple Coconut', description: 'No sugar added pineapple coconut flavored ice cream also contains no sugar added chunks of pineapple.', url:'https://i.postimg.cc/7L7XY6JD/Pineapple-Coconut.png'},
    {id: 5, name:'Cotton Candy', description: 'A creamier, dreamier version of your favorite fluffy, puffy treat. Swirled in a carnival of color for extra cuteness.', url:'https://i.postimg.cc/Y0XzyLZN/Cotton-Candy.png'},
    {id: 6, name:'Chocolate Fudge', description: 'Take everything you love about chocolate and multiply it by chocolate.', url:'https://i.postimg.cc/4y3ztNyY/Chocolate-Fudge.png'},
    {id: 7, name:'Orange Sherbet', description: 'Soak up the sun with delicious citrus sherbet made with oranges.', url:'https://i.postimg.cc/6QNnchTJ/Orange-Sherbet.png'}
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
        {images.map(image => <div key={image.id}><img id='cone-img' src={image.url}></img><div id='cone-name'>{image.name}<div className='description'>{image.description}</div></div>
        {select === false ? <div><button className='circle' onClick={(e) => {e.preventDefault();setTopping(image.name);setSelect(true);props.setOrder(prevState => ({...prevState, topping: {topping_name: image.name, img_url: image.url, qty: 1}}))}}></button><span className='select'>Select</span></div> : null}
        </div>)}
      </Carousel>
      {select === true ? <div><button className='full-circle' onClick={() => {setSelect(false);props.setOrder(prevState => ({...prevState, topping: {topping_name: '', img_url: '', qty: 0}}))}}>✓</button><span className='selected'>Selected {topping}</span></div> : null}
      </div>
    </>
  )
};

export default ChooseTopping;