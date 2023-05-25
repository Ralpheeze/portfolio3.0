import Navbar from '../../components/Navbar/Navbar';
import About from '../About/About';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import './Home.css';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
        <div>
            <Navbar/>

            <div className="home container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="home-left-col">
                            <div><h2 className="home-title">Hi, I'm Eze Raphael</h2></div>
                            <div className='home-head-animate'><h4 className="home-head">FullStack Developer</h4></div>
                            <div><p className="home-content">I’m a detailed-oriented student with a strong work ethic, creativity, and ultimately an ambitious web developer that exhibits a natural curiosity to learn new things from better programmers. My ability to think critically, design, develop/code, test, debug and maintain programs contribute to achieving my goals and needs in being a specialist programmer/developer.</p></div>

                            <div className="my-button">
                                <a href='#' className="firstBtn gen-btn" type='submit'>Hire Me</a>
                                <a href='#' className="secondBtn gen-btn" type='submit'>Let's Talk</a>                  
                            </div>   

                            <div className="social-tags">
                                <a className='social-href' href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a className='social-href' href="#"><i class="bi bi-twitter"></i></a>
                                <a className='social-href' href="#"><i class="fa-brands fa-linkedin-in"></i></a>    
                            </div>                 
                        </div>

                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="my-image">
                            <img src="images/mypic.jpg" alt="my pic" className='my-img img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            
            <About />
            <Education/>
            <Skills id='about'/>
            <Contact/>
            <Footer/>

            
       </div>
        
  )
}
