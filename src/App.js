import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Screens/Log';
import Log from './Screens/Log';
import Signup from './Screens/Signup';
import Cards from "./Component/Cards";
import Home from "./Screens/Home";

function App() {
  return (
    <>
    <BrowserRouter>
             <Routes>

                 <Route path="/home" element={<Home/>}/>


             </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
