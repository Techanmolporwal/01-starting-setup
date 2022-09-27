import React,{useState}  from "react";
import TextForm  from "./TextForm";
import NavBar  from "./NavBar";
import About  from "./About";
import Alert from "./Alert";
// import { useState } from "react/cjs/react.production.min";
import {
  BrowserRouter ,
 Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let [mode,setMode]=useState("light");
  let [alert,setAlert]= useState(null);
  let showAlert=(messge,type)=>{
    setAlert({
      msg:messge,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  let toggleMode2=()=>{
    if(mode==="light"  ){
      setMode("blue")
      document.body.style.background="lightblue";
      showAlert("BlueDark mode has been Enabled","success")
      document.title="TextUtils-blueMode"
    }
    else{
      setMode("light")
      document.body.style.background="white";
      showAlert("Light mode has been Enabled","success")
    }
  }
 let  toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.background="grey";
      showAlert("GrayDark mode has been Enabled","success")
      document.title="TextUtils-darkMode"
    }
    else{
      setMode("light")
      document.body.style.background="white";
      showAlert("Light mode has been Enabled","success")
    }
  }
  return (
    < BrowserRouter>
    <NavBar title="TextUtils" mode={mode}  toggleMode={toggleMode}  toggleMode2={toggleMode2} />
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
        <Route exact path="/about" element={ <About />}/>
          <Route exact path="/" element={  <TextForm heading="Enter the Text Below" mode={mode} showAlert={showAlert}/>} />
      </Routes> 
    </div>
    </ BrowserRouter>
  );
}
 
export default App;
//react router help us to change the desired component without changing other component which need not to be change 