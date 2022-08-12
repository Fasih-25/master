// import logo from './logo.svg';
import React, { useState } from 'react';
// import './Apps.css';
import Alert from './Alert';
// import About from './components/About';
import Navbar from './Navbar';
import TextForm from './TextForm';

function Apps() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] =  useState(null);
  const showAlert = (message, type) =>{
           setAlert({
            msg: message,
            type: type
           })
           setTimeout(()=>{
            setAlert(null);

           }, 1500)
  }
  const toggleMode = () => {
         if (mode === 'dark'){
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Dark Mode Disabled","success");
         }
         else {
          setMode('dark');
          document.body.style.backgroundColor = '#232222';
          showAlert("Dark Mode Enabled","success");
         }
  }
  return (
   <>
    {/* <Navbar title="TextUtils" aboutText="About uS" mode={mode} toggleMode = {toggleMode} /> */}
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm />
    {/* <About /> */}
    </div>
   </>
  );
}

export default Apps;
