import React from 'react';
import '../style/Works.css'
import { Col, Container, Row } from 'react-bootstrap';

import star from '../profileImg/star-2-2.png'
import btnIcon from '../profileImg/icon-2.svg'
import project1 from '../profileImg/projects/rsz_1projects1.png'
import project2 from '../profileImg/projects/rsz_projects2.png'
import project3 from '../profileImg/projects/rsz_projects3.png'
import project4 from '../profileImg/projects/rsz_projects4.png'
import project5 from '../profileImg/projects/rsz_projects5.png'
import project6 from '../profileImg/projects/rsz_projects6.png'


import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Helmet from '../components/Helmet/Helmet';

const Works = () => {
    return (
        <Helmet title='Work'>
            <div>
                <Container className='work-section'>
                    <Row>
                        <Col md='12'>
                            <div className="self-heading h-full mt-4 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                                <img src={star} alt="" />
                                <h1>ALL PROJECTS</h1>
                                <img src={star} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='work-card' md='4' data-aos="zoom-in">
                            <Card variant="outlined" sx={{ width: 320 }}>
                                <CardOverflow>
                                    <AspectRatio ratio="2">
                                        <img
                                            src={project1}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <IconButton
                                        aria-label="Like minimal photography"
                                        size="md"
                                        variant="solid"
                                        color="danger"
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            borderRadius: '50%',
                                            right: '1rem',
                                            bottom: 0,
                                            transform: 'translateY(50%)',
                                        }}
                                    >
                                        <i class="ri-heart-3-fill"></i>
                                    </IconButton>
                                </CardOverflow>
                                <CardContent>
                                    <Typography level="title-md">
                                        <Link overlay underline="none">
                                            Food Delivery App
                                        </Link>
                                    </Typography>
                                    <Typography level="body-sm">
                                        <Link>React</Link>
                                    </Typography>
                                </CardContent>
                                <CardOverflow variant="soft">
                                    <Divider inset="context" />
                                    <CardContent orientation="horizontal">
                                        <Typography level="body-xs">React</Typography>
                                        <Divider orientation="vertical" />
                                        <Typography level="body-xs">
                                            <div className="icon-btn">
                                                <img src={btnIcon} alt="" />
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </CardOverflow>
                            </Card>
                        </Col>
                        <Col className='work-card' md='4' data-aos="zoom-in">
                            <Card variant="outlined" sx={{ width: 320 }}>
                                <CardOverflow>
                                    <AspectRatio ratio="2">
                                        <img
                                            src={project2}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <IconButton
                                        aria-label="Like minimal photography"
                                        size="md"
                                        variant="solid"
                                        color="danger"
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            borderRadius: '50%',
                                            right: '1rem',
                                            bottom: 0,
                                            transform: 'translateY(50%)',
                                        }}
                                    >
                                        <i class="ri-money-pound-circle-fill"></i>
                                    </IconButton>
                                </CardOverflow>
                                <CardContent>
                                    <Typography level="title-md">
                                        <Link overlay underline="none">
                                            Expense Tracker
                                        </Link>
                                    </Typography>
                                    <Typography level="body-sm">
                                        <Link>React</Link>
                                    </Typography>
                                </CardContent>
                                <CardOverflow variant="soft">
                                    <Divider inset="context" />
                                    <CardContent orientation="horizontal">
                                        <Typography level="body-xs">React</Typography>
                                        <Divider orientation="vertical" />
                                        <Typography level="body-xs">
                                            <div className="icon-btn">
                                                <img src={btnIcon} alt="" />
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </CardOverflow>
                            </Card>
                        </Col>
                        <Col className='work-card' md='4' data-aos="zoom-in">
                            <Card variant="outlined" sx={{ width: 320 }}>
                                <CardOverflow>
                                    <AspectRatio ratio="2">
                                        <img
                                            src={project3}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <IconButton
                                        aria-label="Like minimal photography"
                                        size="md"
                                        variant="solid"
                                        color="danger"
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            borderRadius: '50%',
                                            right: '1rem',
                                            bottom: 0,
                                            transform: 'translateY(50%)',
                                        }}
                                    >
                                        <i class="ri-open-source-fill"></i>
                                    </IconButton>
                                </CardOverflow>
                                <CardContent>
                                    <Typography level="title-md">
                                        <Link overlay underline="none">
                                            Traveling App
                                        </Link>
                                    </Typography>
                                    <Typography level="body-sm">
                                        <Link>React</Link>
                                    </Typography>
                                </CardContent>
                                <CardOverflow variant="soft">
                                    <Divider inset="context" />
                                    <CardContent orientation="horizontal">
                                        <Typography level="body-xs">React</Typography>
                                        <Divider orientation="vertical" />
                                        <Typography level="body-xs">
                                            <div className="icon-btn">
                                                <img src={btnIcon} alt="" />
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </CardOverflow>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col className='work-card' md='4' data-aos="zoom-in">
                            <Card variant="outlined" sx={{ width: 320 }}>
                                <CardOverflow>
                                    <AspectRatio ratio="2">
                                        <img
                                            src={project4}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <IconButton
                                        aria-label="Like minimal photography"
                                        size="md"
                                        variant="solid"
                                        color="danger"
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            borderRadius: '50%',
                                            right: '1rem',
                                            bottom: 0,
                                            transform: 'translateY(50%)',
                                        }}
                                    >
                                        <i class="ri-magic-fill"></i>
                                    </IconButton>
                                </CardOverflow>
                                <CardContent>
                                    <Typography level="title-md">
                                        <Link overlay underline="none">
                                            Arsha Project
                                        </Link>
                                    </Typography>
                                    <Typography level="body-sm">
                                        <Link>React</Link>
                                    </Typography>
                                </CardContent>
                                <CardOverflow variant="soft">
                                    <Divider inset="context" />
                                    <CardContent orientation="horizontal">
                                        <Typography level="body-xs">React</Typography>
                                        <Divider orientation="vertical" />
                                        <Typography level="body-xs">
                                            <div className="icon-btn">
                                                <img src={btnIcon} alt="" />
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </CardOverflow>
                            </Card>
                        </Col>
                        <Col className='work-card' md='4' data-aos="zoom-in">
                            <Card variant="outlined" sx={{ width: 320 }}>
                                <CardOverflow>
                                    <AspectRatio ratio="2">
                                        <img
                                            src={project5}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <IconButton
                                        aria-label="Like minimal photography"
                                        size="md"
                                        variant="solid"
                                        color="danger"
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            borderRadius: '50%',
                                            right: '1rem',
                                            bottom: 0,
                                            transform: 'translateY(50%)',
                                        }}
                                    >
                                        <i class="ri-shopping-cart-2-fill"></i>
                                    </IconButton>
                                </CardOverflow>
                                <CardContent>
                                    <Typography level="title-md">
                                        <Link overlay underline="none">
                                            Ema John Cart
                                        </Link>
                                    </Typography>
                                    <Typography level="body-sm">
                                        <Link>React</Link>
                                    </Typography>
                                </CardContent>
                                <CardOverflow variant="soft">
                                    <Divider inset="context" />
                                    <CardContent orientation="horizontal">
                                        <Typography level="body-xs">React</Typography>
                                        <Divider orientation="vertical" />
                                        <Typography level="body-xs">
                                            <div className="icon-btn">
                                                <img src={btnIcon} alt="" />
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </CardOverflow>
                            </Card>
                        </Col>
                        <Col className='work-card' md='4' data-aos="zoom-in">
                            <Card variant="outlined" sx={{ width: 320 }}>
                                <CardOverflow>
                                    <AspectRatio ratio="2">
                                        <img
                                            src={project6}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <IconButton
                                        aria-label="Like minimal photography"
                                        size="md"
                                        variant="solid"
                                        color="danger"
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            borderRadius: '50%',
                                            right: '1rem',
                                            bottom: 0,
                                            transform: 'translateY(50%)',
                                        }}
                                    >
                                        <i class="ri-focus-2-line"></i>
                                    </IconButton>
                                </CardOverflow>
                                <CardContent>
                                    <Typography level="title-md">
                                        <Link overlay underline="none">
                                            Portfilio App
                                        </Link>
                                    </Typography>
                                    <Typography level="body-sm">
                                        <Link>React</Link>
                                    </Typography>
                                </CardContent>
                                <CardOverflow variant="soft">
                                    <Divider inset="context" />
                                    <CardContent orientation="horizontal">
                                        <Typography level="body-xs">React</Typography>
                                        <Divider orientation="vertical" />
                                        <Typography level="body-xs">
                                            <div className="icon-btn">
                                                <img src={btnIcon} alt="" />
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </CardOverflow>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Helmet>
    );
};

export default Works;