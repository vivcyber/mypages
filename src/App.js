
import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import FrontEnd from './page/FrontEnd';
import Uiux from './page/UIUX';
import Others from './page/Others';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    
    <BrowserRouter>  
    <Navbar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/frontend" element={<FrontEnd />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/others" element={<Others />} />
       </Routes>

   
  </BrowserRouter>
   

    
      
    </>
  );
}

export default App;
