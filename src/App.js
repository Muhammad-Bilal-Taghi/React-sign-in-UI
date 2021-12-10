
import React from 'react';
import './App.css'
// import Introductionhooks from './component/Hooks/Introductionhooks';
// import logo from './logo.svg';
// import './App.css';
// import Profile from './component/profile';
//import {Login} from "./component/Forms/index"
// import State from './component/State'
// import Hideandshow from './component/Hideandshow';
// import Eventhandling from './component/Eventhandling';
// import CmpDidMount from './component/Lifecyclemethod/CmpDidMount';
   // import CmpDidUpdate from './component/Lifecyclemethod/CmpDidUpdate';
    //  import CmpWillUnmount from './component/Lifecyclemethod/CmpWillUnmount';
    //  import Useeffect from './component/Hooks/Useeffect'
   import Form from './component/Form/submit'
  

     
     function App(){
      
            
   return(
      
      // <div className="App">
      //    {/* <header className="header">
      //           <h1>Function Component</h1>
      //            <Profile text="Function Profile Component"/>
      //            <Profile text={{name : 'Bilal'}} data="Profile Data"/>
      //            <Profile text={{name : 'Junaid'}} data="Profile Data"/>
      //            <Profile text={{name : 'Shibly'}} data="Profile Data"/>

      //    </header> */}
      // </div>
        <div className ="App">
          <header className="header">
            <h1>Login Form</h1>
            </header>

               {/* <State/> */}
               {/* <Hideandshow/> */}
                {/* <Eventhandling/> */}
              {/* <CmpDidMount/> */}
              {/* <CmpDidUpdate/> */}
                 {/* <Introductionhooks/> */}
               {/* <Useeffect/> */}
               
                <Form/>
        </div>
   );
}
// class App extends React.Component {
//    constructor (){
//        super()
//        this.state={
//           toggle:true
//        }
//    }
//     render (){
//         return (
//             <div>
                
//                <h1>React : Component Will unmount</h1>
//               {
//                  this.state.toggle?
//                  <CmpWillUnmount/>:null
//               }
//               <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete User</button>
//             </div>
//         );
//     }
// }
            

export default App;
