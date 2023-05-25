import './About.css';

export default function About() {
  return (
    <div className='about container' id='about'>
        <div className="row">
            <div className="col-12 col-lg-12">
                <div className="about-me">
                    <div><h4 className="about-title">About <span className="me">Me</span> </h4></div>

                    <div className="about-image">
                        <img src="images/mypiccopy2.png" alt="" className='about-img img-fluid'/>
                        <span className="circle-spin"></span>
                    </div>

                    <div><h2 className="about-name">FullStack Developer!</h2></div>

                    <div><p className="about-context">I aim to land as a software developer with excellent web development, modeling, analysis and problem-solving skills in programming. I've worked with Google Developer Student Clubs and Hebron Startup Lab to design virtually appealing websites that are easy to navigate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus asperiores est quos nisi atque, non soluta facilis veniam odit! Mollitia officia magnam ab, architecto asperiores aliquid aspernatur tenetur qui quo voluptates ipsam officiis nihil omnis voluptatum ipsum eius quam.</p></div>

                    <div className="about-button">
                        <a href='#' className="about-btn gen-btn">Read More</a>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}
