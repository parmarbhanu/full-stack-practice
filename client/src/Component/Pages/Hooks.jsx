import React, { useState } from 'react'

export default function Hooks() {
 const [value, setvalue] = useState(0);
const inc=()=>{
    setvalue(value+1);
}
    return (
    <div>
    {value}
    <button onClick={inc}>+</button>
    </div>
  )
}
