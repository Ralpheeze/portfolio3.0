import './Skills.css';

export default function Skills() {
  return (
    <div>
        <div className="skill container" id='skills'>
            <div><h3 className="skill-head1">My <span className="span-skill">Skills</span></h3></div>
            <div className="row ">
                <div className="col-12 col-lg-6 skill-column">  
                    <div><h3 className="skill-head2">Coding Skills</h3></div>

                    <div className="skill-control">
                        <div className="skill-content">
                            <div className="skill-progress">
                                <div><h3 className="skill-title">HTML <span className="percent">55%</span></h3></div>
                                <div className="skill-bar"><span className="span-bar"></span></div>
                            </div>

                            <div className="skill-progress">
                                <div><h3 className="skill-title">Vanilla CSS<span className="percent">35%</span></h3></div>
                                <div className="skill-bar"><span className="span-bar"></span></div>
                            </div>

                            <div className="skill-progress">
                                <div><h3 className="skill-title">BootStrap CSS<span className="percent">45%</span></h3></div>
                                <div className="skill-bar"><span className="span-bar"></span></div>
                            </div>

                            <div className="skill-progress">
                                <div><h3 className="skill-title">JavaScript<span className="percent">5%</span></h3></div>
                                <div className="skill-bar"><span className="span-bar"></span></div>
                            </div>

                            <div className="skill-progress">
                                <div><h3 className="skill-title">React <span className="percent">15%</span></h3></div>
                                <div className="skill-bar"><span className="span-bar"></span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 skill-column">  
                    <div><h3 className="skill-head2">Professional Skills</h3></div>

                    <div className="skill-control">
                        <div className="skill-content">
                            <div className="skill-progress">
                                <div><h3 className="skill-title">Web Design <span className="percent">10%</span></h3></div>
                                <div className="skill-bar"><span className="span-bar"></span></div>
                            </div>

                            <div className="skill-progress">
                                <div><h3 className="skill-title">Frontend Web Development <span className="percent">35%</span></h3></div>
                                <div className="skill-bar"><span className="span-bar"></span></div>
                            </div>

                            <div className="skill-progress">
                                <div><h3 className="skill-title">Backend Web Development<span className="percent">10%</span></h3></div>
                                <div className="skill-bar"><span className="span-bar"></span></div>
                            </div>

                            <div className="skill-progress">
                                <div><h3 className="skill-title">MERN Stack Development <span className="percent">15%</span></h3></div>
                                <div className="skill-bar"><span className="span-bar"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
            </div>
        </div>
    </div>
  )
}
