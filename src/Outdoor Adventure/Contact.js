import React from 'react'
import Menubar from './Menubar'
import './contactstyle.css'
// import { Button } from 'bootstrap'
// import { Form } from 'react-bootstrap'
const Contact = () => {
  return (
    <>
    <div className='contimg'>
      <Menubar/>
      <h1 className='cnthd'>CONTACT US</h1>
    </div>


    <div className='flex'>
      <div>
        <h3 className='cnt'>WE'RE READY, LET'S TALK.</h3>
        <div className='mb-3'>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="your Name" required/>
        <div class="invalid-feedback">
        This field Is Required
      </div>
        </div>
        <div className="mb-3">
  {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="your Email" required/>
  <div class="invalid-feedback">
        This field Is Required
      </div>
</div>
<div class="mb-3">
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"placeholder='Message'></textarea>
  <div className="invalid-tooltip">
        Pls fill out this field
      </div>
      <div class="invalid-feedback">
        This field Is Required
      </div>
</div>

<button type="button" className='btn'>SEND MESSAGE</button>


      </div>
      <div>2</div>
    </div>
    </>
  )
}

export default Contact
