import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Row } from 'react-bootstrap';
import '../style/MyOffers.css'

import star from '../profileImg/star-2-2.png'

import profileImg from '../profileImg/another-png.png'
import icon from '../profileImg/icon2-2.png'



import btnIcon from '../profileImg/icon-2.svg'
import signPng from '../profileImg/sign.png'
import icon2 from '../profileImg/icon2-2.png'

const MyOffers = () => {
    return (
        <Helmet title='Offers'>
            <div className='mt-5'>
                <Container>
                    <Row>
                        <Col md='4'>
                            <div className="offer-container border-radius" data-aos="zoom-in">
                                <div className="offer-icons h-full">
                                    <div className="icons align-items-center justify-content-center">
                                        <div className="offers-container">
                                            <ul>
                                                <li data-aos="fade-left">
                                                    <i class="ri-camera-fill"></i>
                                                    Photography
                                                </li>
                                                <li data-aos="fade-right">
                                                    <i class="ri-reactjs-line"></i>
                                                    Front end developing
                                                </li>
                                                <li data-aos="fade-down">
                                                    <i class="ri-palette-fill"></i>
                                                    Fashion photo editing
                                                </li>
                                                <li data-aos="fade-up">
                                                    <i class="ri-smartphone-line"></i>
                                                    Mobile Photography
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md='8'>
                            <div>
                                <div className="self-heading  mb-2 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                                    <img src={star} alt="" />
                                    <h1>MY OFFERINGS</h1>
                                    <img src={star} alt="" />
                                </div>
                                <div className="my-offers h-full border-radius" data-aos="zoom-in">
                                    <Row>
                                        <Col md='6'>
                                            <div className="offers-content" data-aos="fade-right">
                                                <h2>PHOTOGRAPHY</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati, unde earum aspernatur perferendis hic quod vel neque similique id distinctio natus, blanditiis minima omnis atque pariatur laboriosam voluptates, est vero numquam minus! Eaque maxime natus sunt ut commodi assumenda.</p>
                                            </div>
                                        </Col>
                                        <Col md='6'>
                                            <div className="offers-content" data-aos="fade-left">
                                                <h2>developing</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati, unde earum aspernatur perferendis hic quod vel neque similique id distinctio natus, blanditiis minima omnis atque pariatur laboriosam voluptates, est vero numquam minus! Eaque maxime natus sunt ut commodi assumenda.</p>
                                            </div>
                                        </Col>
                                        <Col md='6'>
                                            <div className="offers-content" data-aos="zoom-out">
                                                <h2>photo editing</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati, unde earum aspernatur perferendis hic quod vel neque similique id distinctio natus, blanditiis minima omnis atque pariatur laboriosam voluptates, est vero numquam minus! Eaque maxime natus sunt ut commodi assumenda.</p>
                                            </div>
                                        </Col>
                                        <Col md='6'>
                                            <div className="offers-content" data-aos="zoom-out">
                                                <h2>Mobile (PG)</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati, unde earum aspernatur perferendis hic quod vel neque similique id distinctio natus, blanditiis minima omnis atque pariatur laboriosam voluptates, est vero numquam minus! Eaque maxime natus sunt ut commodi assumenda.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
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
                                        <img src={btnIcon} alt="" />
                                    </div>
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
                                        <img src={btnIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md='3' className='about-margin-2'>
                            <div className="flex-info about-info border-radius h-full" data-aos="zoom-in">
                                <img src={signPng} alt="" />
                                <p className='mt-3'>MORE ABOUT ME</p>
                                <div className="flex-con d-flex align-items-center justify-content-between">
                                    <div className="flex">
                                        <h4>Credentials</h4>
                                    </div>
                                    <div className="icon-btn">
                                        <img src={btnIcon} alt="" />
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

export default MyOffers;