// import React from "react";


// function App() {
// //   //let x=React.createElement("div",{className:"App"},
// //     React.createElement("h1",null,"Wlecome to Rract")
// // )
//   let username ="harshitha"
//   return (
//     // <div className="App">
//     //   <h1>Wlecome to React</h1>
//     //   <img/>
//     // </div>
//     // x
//     <div >
//       <h1>ExcleR</h1>
//       <p>para</p>
//       {username}
//       {100*100}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// class App extends React.Component{
//   render(){
//     return(
//       <div>class</div>
//     )
//   }
// }
// export default App;


// function App(){
//   return(
//     <div>functional </div>
//   )
// }
// export default App;


// const App=()=>{
//   return(
//     <h1>Arrow functional component</h1>
//   )
// }
// export default App;


// import React from "react";
// import Navbar from "./components/Navbar"
// import Main from "./components/Main"
// import Sidebar1 from"./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2"
// import Footer from "./components/Footer"

// class App extends React.Component{
//   render(){
//     return(
//       <div className="app">
//         <Navbar/>
//         <Main></Main>
//         <div className="side">
//           <Sidebar1></Sidebar1>
//           <Sidebar2/>
//         </div>
//         <Footer/>
//       </div>
//     )
//   }
// }

// export default App;

// import React, { Component } from 'react'
// import CBCpropex from './propex/CBCpropex'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <CBCpropex
//         username="harshi"
//         age={20}
//         hobbies={["playing","eating","sleeping"]}
//         address={{city:"hyd", area:"Miyapur"}}
//         isMarried={false}
//         sendfun={function(){alert("Hi harshi")}}
//         />
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'
import PropsChild from './propex/PropsChild'
import SubChildProps from './propex/SubChildProps'

export default class App extends Component {
  render() {
    return (
      <div>
        <PropsChild username="harshi" company="meta">
          <h1>This data is passing as a props childdern to the child</h1>
          <SubChildProps name="hi">
            
          </SubChildProps>
        </PropsChild>

      </div>
    )
  }
}
