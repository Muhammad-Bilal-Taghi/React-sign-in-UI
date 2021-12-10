import React from "react";


class Hideandshow extends React.Component {

    constructor () {
        super ();
        this.state={
            show : true
        }
    }
    render (){
        return (
            <div>
                
                {
                    this.state.show ?
                    <button>Toggle me</button>
                    :null

                }
                
                
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Hide and show Text</button>
            </div>
        )
    }
}




export default Hideandshow