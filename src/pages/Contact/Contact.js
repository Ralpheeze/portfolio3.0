import './Contact.css';

export default function Contact() {
  return (
    <div>
        <div className="contact container">
            <div><h2 className="contact-head">Contact<span className="contact-me"> Me</span></h2></div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="contact-form">
                            <form action="#">
                                <div className="message-guard">
                                    <div class="form-group input-control ">
                                        <input type="name" placeholder='Full Name' class="form-control input-ctrl" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        <span className="span-focus"></span>
                                    </div>
                                    <div class="form-group input-control">                                    
                                        <input type="email" placeholder='Email Address' class="form-control input-ctrl" id="exampleInputPassword1"/>
                                        <span className="span-focus"></span>
                                    </div>
                                    
                                </div>
                            </form>
                        
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="contact-form">
                        <form action="">
                            <div className="message-guard">
                                <div class="form-group input-control">
                                    <input type="number" placeholder='Mobile Number' class="form-control input-ctrl" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <span className="span-focus"></span>
                                </div>
                                <div class="form-group input-control">                                    
                                    <input type="text" placeholder='Email Subject' class="form-control input-ctrl" id="exampleInputPassword1"/>
                                    <span className="span-focus"></span>
                                </div>                                
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-12 col-lg-12">
                    <div className="contact-form">
                        <form class="was-validated">                            
                            <div className="message-guard3">
                                <textarea class="form-control is-invalid contact-text" id="validationTextarea" cols="" rows='10' placeholder="Your Message" required></textarea>
                                <span className="span-focus2"></span>
                                <div class="invalid-feedback">Please enter a message in the textarea.</div>
                            </div>                            
                        </form>
                    </div>

                    <div className="contact-button">
                        <a href='#' type="submit" class=" contact-btn gen-btn">Submit</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
