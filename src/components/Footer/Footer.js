import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-5' data-aos="zoom-in">
            <Container>
                <Row>
                    <Col md='12'>
                        <div className='head text-center mt-5'>
                            <div className="logo">
                                <h3>Focu<span className='focus'>S</span></h3>
                                <div className="footer-menu mt-4 mb-4 d-flex justify-content-center">
                                    <Link to={'/home'}>Home</Link>
                                    <Link to={'/about'}>About</Link>
                                    <Link to={'/works'}>Works</Link>
                                    <Link to={'/contact'}>Contact</Link>
                                </div>
                                <div className='footer mt-3 mb-5'>
                                    <p>© All rights reserved by <b>FocusProject</b></p>
                                </div>
                            </div>
                                
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;