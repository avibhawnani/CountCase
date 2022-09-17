import './App.css';
import Navbar from './components/Navbar.js';
import MyForms from './components/MyForms';
import About from './components/About';
import React ,{useState} from "react";
import Alerts from './components/Alerts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,tp)=>{
      setAlert({
        msg: message,
        type: tp
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const toggleMode= ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor ='#181818';
      document.title="CountCase - Dark Mode";
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor ='white';
      document.title="CountCase - Light Mode";
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar mode={mode} title="CountCase" aboutText="About" toggleMode={toggleMode}></Navbar>
      <Alerts alert={alert} ></Alerts>
      <div className='container my-3'>
      <Routes>
          <Route exact path="/about" element = {<About  mode={mode}/>}/>
          
          <Route exact path="/"
          element={<MyForms heading="Enter the text to analyze" mode={mode} showAlert={showAlert}></MyForms>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
