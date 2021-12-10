import React from "react";

function Eventhandling() 
   
{
    function testfun(){
        alert ("Test Fun")
    }
    return (
        <div>
        <h1>Enter Click me and ALert</h1>
        <button onClick={testfun}>Click me!</button>
        </div>
        )
}




export default Eventhandling;
