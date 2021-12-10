import React from "react";

class CmpDidMount extends React.Component
{
    constructor () {
        super();
        this.state={
            data:null
        }
      console.warn("constructor")
    }
    componentDidMount() {
        this.setState({data:"updated"})
        console.warn("componentDidMount")
    }

    render(){
        console.warn("render")
        return(
            <div>
                <h1>Life Cycle method</h1>
            </div>
        )
    }
}

export default CmpDidMount;