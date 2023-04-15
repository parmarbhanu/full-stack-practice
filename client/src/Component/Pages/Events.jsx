import React, { useState } from 'react'

const Events = () => {
    const [bg , changebg]=useState();
    let change =()=>{
   console.log("clicked")
  
    }
  return (
    <div>
    <h1>hii events</h1>
    <button onClick={change}> click me</button>
    </div>
  )
}

export default Events