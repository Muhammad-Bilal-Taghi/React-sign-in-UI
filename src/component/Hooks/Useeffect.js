import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

 const Useeffect = ()=> {
       const [count,setCount]  = useState (0)
       useEffect(()=>{
           console.warn("count")
       } ,[count==10]
       )
    return (
      <div>
         <h1>Use Effect Hooks in React JS...{count}</h1>       
         <button onClick={()=>setCount(count+2)}>Updated State</button>
        </div>
    )
  }

export default Useeffect;