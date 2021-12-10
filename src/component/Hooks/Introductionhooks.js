import React, { useState } from "react";

function Introductionhooks (){
    const [count,setCount]=useState(100)
    return (
        <div>
            <h1>Hooks in functional Compoenent{count}</h1>
            <button onClick={()=>{setCount(count*2)}}>Increment</button>
            <button onClick={()=>{setCount(count/2)}}>Decrement</button>
        </div>
    )
}

export default Introductionhooks;