import React from 'react'
import Menubar from './Menubar'
import './servstyle.css'
import Line from './Line';
import { Container,Row,Col } from 'react-bootstrap';
import imag from './ImagesServices/outdoor-image-03.jpg'
import imag1 from './ImagesServices/services-2.jpg'
import imag2 from './ImagesServices/services-3.jpg'
import imag3 from './ImagesServices/outdoor-image-01 (1).jpg'
import Line1 from './Line1';
import Footer from './Footer';
const Services = () => {
  return (
    <>
    <div className='servimg'>
      <Menubar/>
       <h1 className='serhd'>SERVICES</h1> 
    </div>

    <div className='serpara'>
      <h2 className='head'>IT'S TIME TO START YOUR ADVENTURES </h2>
      <Line/>
      <p className='serline'>
      Adventure Time has received universal acclaim from critics, with much praise geared <br/>towards its originality and worldbuilding.
      </p>
    </div>

    <Container>
      <Row className='adventures'>
         <Col>
          <img  className='advimg' src={imag}alt='img'/>
          <h4 className='trips'>Backpacking Trips</h4>
          <p className='trpinfo'>Fuerat aestu carentem habentia spectent tonitrua mutastis<br/> locavit liberioris inistra possedit.</p>
        </Col>
        <Col>
        <img  className='advimg' src={imag1} alt='img'/>
        <h4 className='trips'>Family Hiking Trips</h4>
        <p className='trpinfo'>Fuerat aestu carentem habentia spectent tonitrua mutastis<br/> locavit liberioris inistra possedit.</p>
        </Col>
     </Row>
     <Row className='adventures'>
      <Col>
      <img className='advimg' src={imag2} alt='img'/>
      <h4 className='trips'> Water Sports</h4>
      <p className='trpinfo'>Fuerat aestu carentem habentia spectent tonitrua mutastis<br/> locavit liberioris inistra possedit.</p>
      </Col>
      <Col>
      <img  className='advimg' src={imag3} alt='img'/>
      <h4 className='trips'>Winter Sports</h4>
      <p className='trpinfo'>Fuerat aestu carentem habentia spectent tonitrua mutastis<br/> locavit liberioris inistra possedit.</p>
      </Col>
     </Row>
   </Container>


<div className='box'>
   <Container>
    <Row className='row'>
     <Col>
     <h3 className='houtdoor'>Why Outdoor Adventures</h3>
     <Line1/>
     <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br/>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
     <ul>
      <li>Experience: Locavit liberioris possedit</li>
      <li>Reputation: Diremit mundi mare undae</li>
      <li>Guide Experience: Spectent tonitrua mutastis</li>
     </ul>
     </Col>
     <Col>
     <h3 className='houtdoor'>What You Get</h3>
     <Line1/>
     <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br/>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
     <ul>
      <li>Private Hike: Locavit liberioris possedit</li>
      <li>Transportation: Diremit mundi mare undae</li>
      <li>Great Facilities: Spectent tonitrua mutastis</li>
     </ul>
     </Col>
    </Row>
   </Container>
   </div>

   <Footer/>
    </>
  )
}

export default Services
