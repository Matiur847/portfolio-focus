import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../style/Contact.css'

import icon2 from '../profileImg/icon2-2.png'


const Contact = () => {
    return (
        <Helmet title='Contact'>
            <div className='mt-5'> 
                <Container>
                    <Row>
                        <Col md='4'>
                            <div className="contact-container" data-aos="zoom-in">
                                <h3>CONTACT INFO</h3>
                                <div className="subtitle d-flex align-items-center gap-4">
                                    <div className="icon">
                                        <i class="ri-mail-fill"></i>
                                    </div>
                                    <div className="sub-info">
                                        <span>MAIL US</span>
                                        <h4>matiur02111@gmail.com</h4>
                                        <h4>matiur02111@gmail.com</h4>
                                    </div>
                                </div>
                                <div className="subtitle d-flex align-items-center gap-4">
                                    <div className="icon">
                                        <i class="ri-phone-fill"></i>
                                    </div>
                                    <div className="sub-info">
                                        <span>CONTACT US</span>
                                        <h4>phone: +8809638343041</h4>
                                        <h4>phone: +8809638343041</h4>
                                    </div>
                                </div>
                                <div className="subtitle d-flex align-items-center gap-4">
                                    <div className="icon">
                                        <i class="ri-map-pin-2-fill"></i>
                                    </div>
                                    <div className="sub-info">
                                        <span>LOCATION</span>
                                        <h4>Birampur, Dinajpur (BP)</h4>
                                    </div>
                                </div>
                                <div className="socical-infos mt-5" data-aos="fade-down">
                                    <h3>SOCICAL INFO</h3>
                                    <div className="socical-icons d-flex align-items-center justify-content-start">
                                        <i class="ri-facebook-circle-fill"></i>
                                        <i class="ri-twitter-fill"></i>
                                        <i class="ri-instagram-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md='8'>
                            <div className="contact-form-section border-radius" data-aos="zoom-in">
                                <div className="info d-flex align-items-center justify-content-between">
                                    <h1>Let's work <b>together.</b> </h1>
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="contact-form contact-btn">
                                    <form>
                                        <input type="name" placeholder='Name*'/>
                                        <input type="email" placeholder='Email*'/>
                                        <input type="subject" placeholder='Your Subject*'/>
                                        <input type="message" placeholder='Your Message*'/>
                                        <Button className='w-100'>Send Message</Button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Helmet>
    );
};

export default Contact;