import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

export default function Home() {
  return (
        <div>
            <Navbar/>

            <div className="home container" id='home'>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="home-left-col">
                            <div><h2 className="home-title">Hi, I'm Eze Raphael</h2></div>
                            <div className='home-head-animate'><h4 className="home-head">FullStack Developer</h4></div>
                            <div><p className="home-content">I’m a detailed-oriented fullstack developer with a strong work ethic, creativity, and ultimately an ambitious web developer that exhibits a natural curiosity to learn new things from better programmers. My ability to think critically, design, develop/code, test, debug and maintain programs contribute to achieving my goals and needs in being a specialist programmer/developer.</p></div>

                            <div className="my-button">
                                <a href='#' className="firstBtn gen-btn" type='submit'>Hire Me</a>
                                <a href='#' className="secondBtn gen-btn" type='submit'>Let's Talk</a>                  
                            </div>   

                            <div className="social-tags">
                                <a className='social-href' href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a className='social-href' href="#"><i class="bi bi-twitter"></i></a>
                                <a className='social-href' href="https://www.linkedin.com/in/ifeanyi-eze-965266253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bcb6jLyNSSrqNztiCjSMwaw%3D%3D"><i class="fa-brands fa-linkedin-in"></i></a>    
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
            
       </div>
        
  )
}
