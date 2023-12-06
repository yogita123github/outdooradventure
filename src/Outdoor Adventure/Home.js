import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styel.css'
import Menubar from './Menubar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './ImagesHome/hiking-v1.jpg'
import imag from './ImagesHome/walking-v1.jpg'
import adv1 from './ImagesHome/outdoor-image-01.jpg'
import adv2 from './ImagesHome/image-1.jpg'
import adv3 from './ImagesHome/snow-1.jpg'
import adv4 from './ImagesHome/outdoor-image-04.jpg'
import Footer from './Footer';
import Line from './Line';
import Line1 from './Line1';


const Home = () => {
  return (
    <>
    
    <div className='hmimg'>
    <Menubar/>
    <p className='head'>Explore The Colorful World</p>
    <Line/>
    <h1 className='htext'>A WONDERFUL GIFT</h1>
    <button className='hbutton'>LEARN MORE</button>
    </div>
    
    
    <div className='quotes'>
    <FontAwesomeIcon icon="fa-sharp fa-solid fa-quote-left" /> 
    <pre className="quo">“A good friend listens to your adventures. A best friend makes them with you.” <p className='writer'>—Tim Crestle</p></pre>
    </div>

    <div>
    <Container fluid="md">
      <h2 className='eventhead'>UPCOMING EVENTS</h2>
      <Line/>
      <Row>
        <Col>
        <img className='eventimg' src={img} alt='img'/>
        <h4 className='events'>Everest Camp Trek</h4>
        <p className='trek'> Everest base camp (EBC) is one of the finest trekking destinations in the world,
         <p className='center'> where you not only get to see the world’s tallest peak.</p> </p>
         <button className='Ebutton'>LEARN MORE</button>
        </Col>
        <Col>
        <img className='eventimg' src={imag} alt='img'/>
        <h4 className='events'>Walking Holidays</h4>
        <p className='trek'> Most of our walking holidays can be organised as a private-guided departure, 
         <p className='center'> offering couples or groups of friends a more flexible option to travel.</p> </p>
         <button className='Ebutton'>LEARN MORE</button>
        </Col>
      </Row>
      </Container>
    </div>

      <div className='imgsec'>
         <h3 className='sechead'>EXPLORE THE WORLD</h3>
         <Line/>
         <p className='secpara'>Underwater exploration is the exploration of any underwater environment, <br/>
                             either by direct observation by the explorer, or by remote observation and <br/>
         measurement under the direction of the investigators.</p>
         <button className='Ebutton secbtn'>LEARN MORE</button>
      </div>

<Container>
      <Row className='flex'>
          <Col>
            <h2 className='trhd'>UPCOMING <br/>TOURS & <br/>DESTINATION</h2>
            <Line1/>
            <p className='trp'>A tropical island resort is an island or archipelago.<br/>that depends on tourism as its source of revenue. <br/>
            The Bahamas in the Caribbean, Bali in Indonesia,<br/> Phuket in Thailand, Hawaii in the United States,<br/> Fiji in the Pacific, 
            and Santorini and <br/>.Ibiza in the Mediterranean are examples <br/>of popular island resorts.</p>
            <button className='tbtn'>LEARN MORE</button>
          </Col>
          <Col>
            <img  className='advim1' src={adv1} alt='img'/>
            <img  className='advim2' src={adv2} alt='img'/>
          </Col>
          <Col>
          <img  className='advim3' src={adv3} alt='img'/>
            <img  className='advim4' src={adv4} alt='img'/>
          </Col>
      </Row>
      </Container>

      <Footer/>

      
    </>
  )
}

export default Home
