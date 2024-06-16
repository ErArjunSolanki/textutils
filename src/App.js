// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); //whether dark mode is enable or not
  const [alert,setAlert] = useState(null);
  const [colorCode,setcolorCode] = useState('#060270');

  const showAlert = (message,type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    },2000); 

  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = colorCode;
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled','success');
      document.title = 'TextUtils Home - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled','success');
      document.title = 'TextUtils Home - Light Mode';
    }
  }

  const changeTheme = (event) => {
    let newColorCode = event.target.attributes.color['value'];
    setcolorCode(newColorCode);
    document.body.style.backgroundColor = newColorCode;
    document.body.style.color = 'white';
  }

  return (
    
    <Router>
      <Navbar title="TextUtils" aboutText="About" homeText='Home' mode={mode} toggleMode={toggleMode} changeTheme={changeTheme} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/"
            element={<TextForm heading="Enter the text to analyze below" mode={mode} colorCode={colorCode} showAlert={showAlert} />}
          />
        </Routes>        
      </div>
    </Router>
        
  );
}

export default App;
