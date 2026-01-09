import './App.css';
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/service" element = {<Service/>}/>
      <Route path="/privacy" element = {<Privacy/>}/>
    </Routes>

   </div>

  );
}

export default App;
