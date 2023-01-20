import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import Diy from './components/Diy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/buy" element={<Products/>}/>
          <Route path="/tipsandtricks" element={<Diy/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;