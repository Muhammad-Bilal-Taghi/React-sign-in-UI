import React from "react";
import './submit.css'

function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log
      ("Your Form has been submitted");
    }
  
    return (
      <div>
      <form onSubmit={handleSubmit}>
          <label>
              Enter your Name
          </label>
          <br/>
          <input type ="text" name="name" placeholder="Name"/> 
            <br/>
            <label>
              Enter your Email
          </label>
          <br/>
          <input type ="email" name="Email" placeholder="Email"/> 
            <br/><br/>
        <button type="submit" className="submit">Submit</button>
      </form>
      </div>
    );
  }

  export default Form;