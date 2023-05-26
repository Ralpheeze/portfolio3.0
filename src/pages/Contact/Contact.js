import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import StyledContactForm from "styled-components";
import './Contact.css';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
        'service_v1a73nh', 
        'template_hh332lt', 
        form.current, 
        '7R55ScHV2-a1y-EFW'
        )
        .then((result) => {
            console.log(result.text);
            console.log("Your Message was sent successfully");
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div>
        <div className="contact container" id='contact'>
            <div><h2 className="contact-head">Contact<span className="contact-me"> Me</span></h2></div>
            <form class="was-validated" ref={form} onSubmit={sendEmail} >
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="contact-form">                            
                            <div className="message-guard">
                                <div class="form-group input-control ">
                                    <input type="text" name='from_name' placeholder='Full Name' class="form-control input-ctrl" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <span className="span-focus"></span>
                                </div>
                                <div class="form-group input-control">                                    
                                    <input type="email" name='from_email' placeholder='Email Address' class="form-control input-ctrl" id="exampleInputPassword1"/>
                                    <span className="span-focus"></span>
                                </div>
                                
                            </div>                        
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="contact-form">                            
                            <div className="message-guard">
                                <div class="form-group input-control">
                                    <input type="number" name='from_number' placeholder='Mobile Number' class="form-control input-ctrl" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <span className="span-focus"></span>
                                </div>
                                <div class="form-group input-control">                                    
                                    <input type="text" name='from_text' placeholder='Email Subject' class="form-control input-ctrl" id="exampleInputPassword1"/>
                                    <span className="span-focus"></span>
                                </div>                                
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-12 col-lg-12">
                        <div className="contact-form">                                                        
                            <div className="message-guard3">
                                <textarea name='message' class="form-control is-invalid contact-text" id="validationTextarea" cols="" rows='10' placeholder="Your Message " required></textarea>
                                <span className="span-focus2"></span>
                                <div class="invalid-feedback">Please enter a message in the textarea.</div>
                            </div>  
                            <div className="contact-button">
                                <input type="submit" class="contact-btn" value='Send Me A Message'/>
                            </div>                          
                            
                        </div>                    
                    </div>
                </div>
            </form>
        </div>
    </div>

// return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="from_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
  );
}
