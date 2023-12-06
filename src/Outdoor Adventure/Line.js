import React from 'react'

const Line = () => {
    const a = {
      width: '80px',
    height:'3px',
    /* border: 2px solid red; */
    backgroundColor:'rgb(225, 8, 146);',
    marginright:'auto',
    marginleft:'auto',
    marginTop:'20px',
    }
  return (
    <div style={a} className='line'></div>
  )
}

export default Line
