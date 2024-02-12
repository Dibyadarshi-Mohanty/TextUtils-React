import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';




function App() {
const [text,settext] = useState('Enable Dark Mode');
const [mode,setmode] = useState('light');
const [alert, setAlert] = useState(null);
  
const showalert = (message,type)=>{
setAlert({
  msg : message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 1500);
}
const toggleMode =()=>{
  if (mode==='dark'){
    setmode('light');
    showalert("Dark Mode Enabled","success");
  document.body.style.backgroundColor="white";
 settext('Enable Dark Mode');
 

  }
 
  else{
    setmode('dark');
 settext('Enable Light Mode');
 showalert("Light Mode Enabled","success");
 document.body.style.backgroundColor="#191970";
  }
 

}
  return (
    <> 
    <Router>
<Navbar title="TextUtils" Abouttext="About" mode={mode} toggleMode={toggleMode} text={text}/>
<Alert alert={alert}/>
{/* <Textform showalert={showalert} textarea="Enter the text here " mode={mode}/> */}
{/* <About/> */}
<Routes>
  <Route exact path='/about' element={<About mode={mode} />}></Route>
  <Route exact path='/home' element={<Textform showalert={showalert} textarea="Enter the text here " mode={mode}/>}></Route>
</Routes>

</Router>
</>
  );
}

export default App;

