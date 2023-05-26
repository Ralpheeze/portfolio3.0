import useScript from '../../hooks/useScript';
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import React, { useRef } from 'react';

const Navbar = () => {

    useScript(
        "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js",
        "sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
    );

    const navbarRef = useRef(null);

    const collapseNavbar = () => {
        if (navbarRef.current.classList.contains('show')) {
        navbarRef.current.classList.remove('show');
        }
    };



    // window.onscroll = () => {
    //     let navControl = document.querySelector('navControl');
    //     navControl.classList.toggle('sticky', window.scrollY > 100);
    // }

    // const el1 = document.getElementById('#navControl');
    // console.log(el1); 

    // if (el1 !== null) {
    // // 👇️ this runs
    // console.log('The element exists in the DOM');
    // } else {
    // console.log('The element does NOT exist in the DOM');
    // }

  return (
    <div>
        <div className="nav-control " id='navControl'>
            <nav class="container navbar navbar-expand-lg my-nav-bar fixed-top">
                <a class="navbar-brand text-white navTitle" href="#"><h5 className="my-name">Raphael.</h5></a>

                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon span-3lines">   
                        <i class="fa fa-navicon"></i>
                    </span>
                    {/* <span class="navbar-toggler-icon "></span> */}
                </button>
                
                <div class="collapse navbar-collapse justify-content-end text-center " id="navbarNav" ref={navbarRef}>
                    <ul class="navbar-nav control-panel">
                        <li class="nav-item nav-l">
                            <Link to= '#home' smooth>
                                <a class="nav-link nav-href home-special" href="#" onClick={collapseNavbar}>Home</a>
                            </Link>                        
                        </li>                    
                        <li class="nav-item nav-l">
                            <Link to='#about' smooth>
                                <a class="nav-link nav-href" href='#' onClick={collapseNavbar}>About</a>
                            </Link>
                        </li>

                        <li class="nav-item nav-l">
                            <Link to = "#education" smooth>
                                <a class="nav-link nav-href" href='#' onClick={collapseNavbar}>Education</a>
                            </Link>
                        </li>

                        <li class="nav-item nav-l">
                            <Link to="#skills" smooth>
                                <a class="nav-link nav-href" href='#' onClick={collapseNavbar}>Skills</a>
                            </Link>
                        </li>

                        <li class="nav-item nav-l">
                            <Link to="#contact" smooth>
                                <a class="nav-link nav-href" href='#' onClick={collapseNavbar}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>             
            </nav>
        </div>
    </div>
  )
};

export default Navbar;
