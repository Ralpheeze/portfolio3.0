import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <div className="container">
            <nav class="navbar navbar-expand-lg my-nav-bar">
                <a class="navbar-brand text-white navTitle" href="#"><h5 className="my-name">Raphael.</h5></a>

                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon span-3lines">   
                        <i class="fa fa-navicon"></i>
                    </span>
                    {/* <span class="navbar-toggler-icon "></span> */}
                </button>
                
                <div class="collapse navbar-collapse justify-content-end text-center " id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item nav-l">
                            <Link to= '/'>
                                <a class="nav-link nav-href home-special" href="#">Home</a>
                            </Link>                        
                        </li>                    
                        <li class="nav-item nav-l">
                            <Link to = "/about">
                                <a class="nav-link nav-href" href='#'>About</a>
                            </Link>
                        </li>

                        <li class="nav-item nav-l">
                            <Link to = "/educate">
                                <a class="nav-link nav-href" href='#'>Education</a>
                            </Link>
                        </li>

                        <li class="nav-item nav-l">
                            <Link to="/skills">
                                <a class="nav-link nav-href" href='#'>SKills</a>
                            </Link>
                        </li>

                        <li class="nav-item nav-l">
                            <Link to="/contact">
                                <a class="nav-link nav-href" href='#'>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}
