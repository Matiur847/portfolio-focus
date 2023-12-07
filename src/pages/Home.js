import React from 'react';
import '../style/Home.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import profile1 from '../profileImg/me1.jpg'
import btnIcon from '../profileImg/icon-2.svg'
import signPng from '../profileImg/sign.png'
import laptop from '../profileImg/my-works.png'
import gfonts from '../profileImg/gfonts.png'
import icon2 from '../profileImg/icon2-2.png'
import Helmet from '../components/Helmet/Helmet';
import { Typewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {

    const {text} = Typewriter({
        words: ['Web Developer', 'Photograper', 'Editor'],
        loop: {},
    })

    return (
        <Helmet title='Home'>
            <div className='mt-5'>
                <Container>
                    <Row >
                        <Col >
                            <div className='home-card border-radius h-full gap-3' data-aos="zoom-in">
                                <div className="home-img" data-aos="fade-down">
                                    <img src={profile1} alt="" />
                                </div>
                                <div className="home-info" data-aos="fade-up">
                                    <h4>A WEB DEVELOPER</h4>
                                    <h1>MATIUR RAHMAN</h1>
                                    <p>
                                        <Typewriter
                                            words={['Web Developer', 'Photographer', 'Editor', 'Farmer', 'businessman', 'Creator!']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                        
                                         <h1>
                                        </h1> </p>
                                    <div className="icon-btn">
                                        <Link to='/about'>
                                            <img className='mt-4' src={btnIcon} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className="second-info">
                                <div className="single-div border-radius h-full" data-aos="zoom-in">
                                    <Marquee>
                                        <span>LATEST WORK AND <b>FEATURED</b> * LATEST WORK AND <b>FEATURED</b> * LATEST WORK AND <b>FEATURED</b> * LATEST WORK AND <b>FEATURED</b> *</span>
                                    </Marquee>
                                </div>
                                <div className="flex-div projects mt-4 d-flex align-items-center justify-content-between">
                                    <div className="flex-info border-radius h-full" data-aos="zoom-in">
                                        <img src={signPng} alt="" />
                                        <p className='mt-3'>MORE ABOUT ME</p>
                                        <div className="flex-con d-flex align-items-center justify-content-between">
                                            <div className="flex">
                                                <h4>Credentials</h4>
                                            </div>
                                            <div className="icon-btn">
                                                <Link to='/works'>
                                                    <img src={btnIcon} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-info margin border-radius h-full" data-aos="zoom-in">
                                        <img src={laptop} alt="" />
                                        <p className='mt-3'>SHOWCASE</p>
                                        <div className="flex-con d-flex align-items-center justify-content-between">
                                            <div className="flex">
                                                <h4>Projects</h4>
                                            </div>
                                            <div className="icon-btn">
                                                <Link to='/works'>
                                                    <img src={btnIcon} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='service-offer mt-4'>
                        <Col md='3'>
                            <div className="flex-info h-full border-radius" data-aos="zoom-in">
                                <div className="text-center">
                                    <img src={gfonts} alt="" />
                                </div>
                                <p className='mt-3'>BLOG</p>
                                <div className="flex-con d-flex align-items-center justify-content-between">
                                    <div className="flex">
                                        <h4>GFonts</h4>
                                    </div>
                                    <div className="icon-btn">
                                        <Link to='/offers'>
                                            <img src={btnIcon} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className="flex-info h-full border-radius" data-aos="zoom-in">
                                <div className="icons d-flex align-items-center justify-content-center">
                                    <i class="ri-camera-fill"></i>
                                    <i class="ri-reactjs-line"></i>
                                    <i class="ri-palette-fill"></i>
                                    <i class="ri-smartphone-line"></i>
                                </div>
                                <p className='mt-3'>
                                    SPECIALIZATION</p>
                                <div className="flex-con d-flex align-items-center justify-content-between">
                                    <div className="flex">
                                        <h4>Services Offering</h4>
                                    </div>
                                    <div className="icon-btn">
                                        <Link to='/offers'>
                                            <img src={btnIcon} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md='3'>
                            <div className="flex-info h-full border-radius" data-aos="zoom-in">
                                <div className='icons d-flex align-items-center justify-content-center'>
                                    <div className="icons-div justify-content-center border-radius">
                                        <i class="ri-facebook-circle-fill"></i>
                                        <i class="ri-twitter-line"></i>
                                    </div>
                                </div>
                                <p className='mt-3'>STAY WITH ME</p>
                                <div className="flex-con d-flex align-items-center justify-content-between">
                                    <div className="flex">
                                        <h4>Profiles</h4>
                                    </div>
                                    <div className="icon-btn">
                                        <Link to='/contact'>
                                            <img src={btnIcon} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col md='6'>
                            <div className="flex-info width-100 d-flex h-full border-radius align-items-center justify-content-center gap-3 h-full border-radius" data-aos="zoom-in">
                                <div className="clients-item">
                                    <h1>02</h1>
                                    <p>YEARS  EXPERIENCE</p>
                                </div>
                                <div className="clients-item">
                                    <h1>+ 00</h1>
                                    <p>CLIENTS  WORLDWIDE</p>
                                </div>
                                <div className="clients-item">
                                    <h1>+ 09</h1>
                                    <p>TOTAL  PROJECTS</p>
                                </div>
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className="flex-info together  h-full border-radius align-items-center justify-content-center gap-3" data-aos="zoom-in">
                                <div className="single-icon">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="flex-div d-flex align-items-center justify-content-between">
                                    <div className="info">
                                        <h1>Let's <br />work <b>together.</b> </h1>
                                    </div>
                                    <div className="icon-btn">
                                        <Link to='/contact'>
                                            <img src={btnIcon} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Helmet>
    );
};

export default Home;