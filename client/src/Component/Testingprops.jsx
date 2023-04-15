import React from 'react'

const Testingprops = (prop) => {
  let nettime=new Date().toLocaleTimeString();

  return (
    <div>
       {prop.a} 

<h1> time is {nettime}</h1>
    </div>
  )
}

export default Testingprops

