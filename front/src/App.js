import React, { Component } from 'react'
// import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
          <div>
              <Nav /> 
              <Signup /> 
              {/* <Login />    */}
          </div>
  )
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <div>
//           <Nav /> 
//           <Signup />   
//       </div>
//     );
//   }
// }
// export default App;