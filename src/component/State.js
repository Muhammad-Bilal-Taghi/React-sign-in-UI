import React from "react";

// class State extends React.Component {
//     constructor ()
//   {
//       super();
//       this.state={
//           name : ' Muhammad Bilal Taghi ',
//           email: 'taghi@gmail.com',
//           address : 'House No 2013 Sec 11 1/2, Orangi town, Karachi',
//           count : 0
//         }
//   }
//     updateStat() {
//         this.setState({
//             name : 'Muhammad Bilal Qadri',
//             email : 'bilal@gmail.com',
//             address: 'Chisti Nagar, Orangi town, Karachi',
//             count : this.state.count+2
//         })

        
//     }
//     render() 
//     {
//         return (
//             <div>
//                 <h3>Name : {this.state.name}</h3>
//                 <h3>Email : {this.state.email}</h3>
//                 <h3>Address : {this.state.address}</h3>
//                 <h3>Count : {this.state.count}</h3>
//                 <button onClick={()=>{this.updateStat()}}>Update State</button>
//             </div>
//         )
//     }
// }
class State extends React.Component {
    constructor () {
        super();
        this.state={
            name : 'Muhammad Bilal Qadri',
            email : 'bilaltaghi109@gmail.com',
            address: 'H.No 2013 Sec 11 1/2, Orangi town, Karachi',
            count: 0
        }
    }

    updatation () {
        this.setState(
            {
                name : 'Muhammad Bilal Yaqoob',
                email : 'bilalyaqoob409@gmail.com',
                address : 'Busy street SH Plaza Karachi',
                count : this.state.count+3
            }
        )
    }
    render ()
    {
        return (
            <div>
                <h2>Name : {this.state.name}</h2>
                <h2>Email : {this.state.email}</h2>
                <h2>Address : {this.state.address}</h2>
                <h2>Count : {this.state.count}</h2>
                <button onClick={()=>{this.updatation()}}>Update Count</button>
            </div>
        )
    }
}
export default State


