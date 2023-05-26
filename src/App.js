import {BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Skills from './pages/Skills/Skills';
// import { Helmet } from 'react-helmet';
import useScript from './hooks/useScript';
import Contact from './pages/Contact/Contact';
import Footer from '../src/components/Footer/Footer';

function App() {
    useScript(
        "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js",
        "sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
    );
  return (
    <BrowserRouter>
        <div className="App">
            
                {/* <Helmet>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" 
                        integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" 
                        crossorigin="anonymous"></script>
            </Helmet> */}   
            <Home/>
            <About/>
            <Education/>
            <Skills/>
            <Contact/>
            <Footer/>              
        </div>
    </BrowserRouter>
  );
}

export default App;
