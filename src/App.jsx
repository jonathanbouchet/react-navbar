import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from "./components/Navbar";
import { About } from './components/pages/About';
// import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import Home from './components/pages/Home';

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/login" element = {<Login />}></Route>
        <Route path="/about" element = {<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
