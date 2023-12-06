import React from 'react'
import Menubar from './Menubar'
import './Abstyle.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imag from './ImagesAbout/outdoor-image-02.jpg'
import Line1 from './Line1';
import Footer from './Footer';


const About = () => {
  return (
    
<>
    <div className='abimg'>
      <Menubar/>
      <h1 className='abhd'>WHO WE ARE?</h1>
    </div>

    <Container>
      <Row className='mission'>
        <Col>
         <h2 className='hdmi'>OUR MISSION</h2>
         <Line1/>
         <p className='pami'>Our mission at Empower Adventures is to provide upscale adventure <br/>experiences with exceptional customer service.</p>
        <p className='pami1'>
        We strive to provide powerful, memorable, and inspirational guest <br/>
        experiences that awaken a spirit of adventure and bond guests through<br/> 
        a positive and uplifting tree top and zip line adventure.
        </p>
        </Col>
        <Col>
        <img className='misimg' src={imag} alt='img'/>
        </Col>
</Row>

      <Row className='mission'>
        <Col>
          <h4>Extraordinary Experiences</h4>
          <Line1/>
          <p className='pami'>
          Our Extraordinary Experiences are a collection of experiences that have been<br/> hand-picked, researched and completed by our team of experts
          </p>
         <p className='pami1'>
         Discover Canada Tours has curated a selection of Premium Tours <br/>
         and Independent Travel Itineraries for those who want to <br/>
         experience Canada and the Pacific Northwest in smaller<br/> groups or independently.
         </p>
        </Col>
        <Col>
        <h4>Our Core values</h4>
        <Line1/>
        <p className='pami'>
        All of our Core Values are rooted in helping individuals change, grow,<br/>and commit to 
      continuous improvement. 
        </p>
        <ul>
       <li>Build stuff that matters</li>
          <li>Stay Curious</li>
          <li>Take Responsibility</li>
        </ul>
        </Col>
        </Row>
      </Container>

      <Footer/>


    </>     

  )
}

export default About
