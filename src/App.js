import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Skills from './pages/Skills/Skills';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <Routes>
            <Route exact path="/" element={<Home/>} />        
            <Route path="/about" element={<About/>} />
            <Route path="/educate" element={<Education/>} />
            {/* <Route path="/skills" element={<Skills/>} /> */}
            
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
