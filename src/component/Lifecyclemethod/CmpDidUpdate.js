import React from "react";

class CmpDidUpdate extends React.Component {
   constructor() {
        super();
        this.state={
            active:null,
            who:null
        }
   }
   componentDidUpdate() 
   {
      console.warn("componentDidUpdate")
   }
    render () {
        return (
            <div>
                <h1>React Component Did updated</h1>
                <button onClick={()=>{this.setState({active:"yes"})}}>Activate me!</button>
            </div>
        )
    }
}

export default CmpDidUpdate;