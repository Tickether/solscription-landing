import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route path = '/' element = {<Hero/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
