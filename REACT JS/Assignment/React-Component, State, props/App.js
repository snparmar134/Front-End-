import { useState } from 'react';
import './App.css';
import MyComp from './MyComp'

function App() {

  let[change, setchange]= useState(false)

  let[isVisible,setVisible]=useState(true)

  return (
    <div>

      {isVisible === true && <MyComp name={change === true ? "Shubhangiba Parmar" : "Princy Wadhawaniya"}/>}

      <button onClick={()=>{setchange(true)}} >Click to change</button>
      <button onClick={()=>{setVisible(false)}}>Remove Component</button>
    </div>
  );
}

export default App;
