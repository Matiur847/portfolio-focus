import React from 'react';
import '../style/About.css'
import { Col, Container, Row } from 'react-bootstrap';

import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
// import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import profileImg from '../profileImg/another-png.png'
import star from '../profileImg/star-2-2.png'
import icon from '../profileImg/icon2-2.png'



import btnIcon from '../profileImg/icon-2.svg'
import signPng from '../profileImg/sign.png'
import icon2 from '../profileImg/icon2-2.png'
import Helmet from '../components/Helmet/Helmet';

const About = () => {
    return (
        <Helmet title='About'>
            <div className='self-container mt-5'>
                <Container>
                    <Row className='content-center'>
                        <Col md='4'>
                            <div className='self-card h-full' data-aos="zoom-in">
                                <div className="sub-container border-radius">
                                    <Card sx={{ minHeight: '280px', width: 320 }}>
                                        <CardCover>
                                            <img
                                                src={profileImg}
                                                loading="lazy"
                                                alt=""
                                            />
                                        </CardCover>
                                        <CardCover
                                            sx={{
                                                background:
                                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                            }}
                                        />
                                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                                            <Typography level="title-lg" textColor="#fff">
                                                Hey I'm Matiur
                                            </Typography>
                                            <Typography

                                                textColor="neutral.300"
                                            >
                                                Birampur, Dinajpur
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                        <Col md='8' >
                            <div className="self-summery mt-4">
                                <div className="self-heading h-full mb-2 d-flex align-items-center justify-content-center" data-aos="fade-down">
                                    <img src={star} alt="" />
                                    <h1>SELF-SUMMARY</h1>
                                    <img src={star} alt="" />
                                </div>
                                <div className="flex-info together  h-full border-radius align-items-center justify-content-center" data-aos="fade-up">
                                    <div className="single-icon">
                                        <img src={icon} alt="" />
                                    </div>
                                    <div className="flex-div d-flex align-items-center justify-content-between">
                                        <div className="info about">
                                            <h1>Matiur Rahman</h1>
                                            <p>I am a web developer lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dicta commodi recusandae consequatur quisquam. Dolor quos optio blanditiis impedit earum laborum asperiores.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col md='6'>
                            <div className="experience h-full border-radius" data-aos="zoom-in">
                                <ul>
                                    <li>
                                        <h3>EXPERIENCE</h3>
                                        <p>2021 - 2023</p>
                                        <h2>React Front-End Developer</h2>
                                        <p>Web Developer</p>
                                    </li>

                                    <li>
                                        <p>2019 - 2023</p>
                                        <h2>Fashion Photography</h2>
                                        <p>Photographer</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md='6' className='about-margin'>
                            <div className="experience h-full border-radius" data-aos="zoom-in">
                                <ul>
                                    <li>
                                        <h3>education</h3>
                                        <p>2020 - 2021</p>
                                        <h2>Secondery School Certificate</h2>
                                        <p>Loka, B.L High School</p>
                                    </li>

                                    <li>
                                        <p>2022 - 2023</p>
                                        <h2>Higher Secondary Certificate</h2>
                                        <p>Hili, Hakimpur (BMT)</p>
                                    </li>
                                </ul>
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

export default About;