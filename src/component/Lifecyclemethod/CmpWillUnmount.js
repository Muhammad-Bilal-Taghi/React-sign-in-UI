import React from "react";

class CmpWillUnmount extends React.Component {
   componentWillUnmount  (){
       alert ("This information has been deleted")
   }
    render (){
        return (
            <div>
                
                <ul>
                    <li>Name : Bilal</li>
                    <li>Email : bilalyaqoob409@gmail.com</li>
                    <li>Contact : 03242682054
        
                    </li>
                </ul>
            </div>
        )
    }
}

export default CmpWillUnmount;