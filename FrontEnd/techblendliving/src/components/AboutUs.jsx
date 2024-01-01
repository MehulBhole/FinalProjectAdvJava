import React from "react";
import teamMemberImage1 from "../media/Alisha.jpg";
import teamMemberImage2 from "../media/Mehul.png";
import teamMemberImage3 from "../media/prasad.png";
import teamMemberImage4 from "../media/Shwetal.jpg";
import teamMemberImage5 from "../media/Shoeb.jpg";

import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { Container } from "react-bootstrap";

import '../Css/AboutUs.css';

export function AboutUs() {
    return (
        <>

            <body class="AboutUsbody" style={{ height: '320vh' }}>
                <section className="section-white mt-5">
                    <div className="container_text-center" style={{ background: '#fff', paddingBottom: '20px' }}>
                        <h1>About Us</h1>
                        <p>Who are we</p>
                        <Container>
                            <h5>TechBlendLiving redefines the way we engage with technology by curating a diverse array of features that
                                cater to the modern lifestyle. From smart home solutions to personalized tech experiences, we strive to
                                enhance convenience, comfort, and connectivity in every aspect of daily life. Dive into a world where
                                intelligent technology seamlessly integrates with your living spaces, making every moment smarter, safer,
                                and more enjoyableAt TechBlendLiving, we believe in the power of tech fusion – the harmonious integration
                                of innovation into our daily routines Our project not only introduces state-of-the-art technologies but also
                                cultivates a community centered around the shared vision of a tech-enhanced lifestyle. Discover a blend of
                                creativity, functionality, and connectivity that transforms the ordinary into the extraordinary.

                            </h5>
                            <h5>
                                Explore a new era of living with TechBlendLiving, where the boundaries between the physical and digital worlds
                                fade away. Our project stands as a testament to the endless possibilities when technology is thoughtfully woven
                                into the fabric of everyday life. Join us on this journey of discovery, where your living spaces become an
                                immersive playground of technological wonders
                            </h5>
                        </Container>
                    </div>
                </section>
                <section className="section-white mt-5">
                    <div className="container" style={{ background: '#e8e8e8' }}>
                        <div className="row">
                            <div className="section-white mt-5 text-center">
                                <h2 className="section-title">Meet The Team</h2>
                                <p className="section-subtitle mt-3"><strong>In our collaborative workspace, every team member is a vital piece of the puzzle.</strong><br></br>
                                    <strong>Let's introduce you to the individuals who make it all happen.</strong></p>
                            </div>

                            <div className="col-md-12">
                                <div className="team-item" style={{ margin: '3%', padding: '0' }}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={teamMemberImage1} className="team-img" style={{ width: '100%', height: '30vh', marginBottom: '10px', marginTop: "20%" }} alt="pic" />
                                        </div>
                                        <div className="col-md-10">

                                            <div className="container mt-4 text-left" style={{ paddingLeft: '10%' }}>
                                                <h3 style={{ cursor: 'pointer', transition: 'color 0.3s', textAlign: "left", margin: '0' }} className="team-member-name">
                                                    Alisha Pawar
                                                </h3><br></br>
                                                <p style={{ margin: '0' }}>
                                                    Alisha is a passionate and dedicated team member. With a keen interest in technology, she brings creativity and innovation to our projects.
                                                    Her ability to think outside the box and embrace emerging trends ensures that our solutions are not only cutting-edge but also user-friendly.
                                                    Alisha's attention to detail and problem-solving skills make her an invaluable asset to our team, contributing to the seamless execution of our projects.
                                                    <br></br>
                                                    Phone-No. - 7754829321,<br></br>
                                                    Email - alisha123@gmail.com
                                                </p>
                                                {/* <div className="social-icons" style={{ display: 'flex', alignItems: 'center' }}> */}
                                                <a href="#" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <span className="icon-space"></span>
                                                <a href="#" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                                {/* </div> */}

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* Team Member 2 (Mehul Bhole) */}
                            <div className="col-md-12">
                                <div className="team-item" style={{ margin: '3%', padding: '0' }}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={teamMemberImage2} className="team-img" style={{ width: '100%', height: '30vh', marginBottom: '20px', marginTop: "20%" }} alt="pic" />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="container mt-4 text-left" style={{ paddingLeft: '10%' }}>
                                                <h3 style={{ cursor: 'pointer', transition: 'color 0.3s', textAlign: "left", margin: '0' }} className="team-member-name">
                                                    Mehul Bhole
                                                </h3><br></br>
                                                <p style={{ margin: '0' }}>
                                                    Mehul is a dynamic and innovative team member known for his creative problem-solving skills. His ability to think critically and approach challenges
                                                    with a fresh perspective ensures that our projects benefit from innovative and effective solutions. Mehul's dedication to staying up-to-date
                                                    with the latest industry trends and technologies allows him to bring cutting-edge ideas to the table, contributing to the success of our tech-driven initiatives.<br></br>
                                                    Details: <br></br>
                                                    Phone-No. - 9954829321,<br></br>
                                                    Email - mehul723@gmail.com<br></br>
                                                </p>
                                                {/* <div className="social-icons" style={{ display: 'flex', alignItems: 'center' }}> */}
                                                <a href="#" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <span className="icon-space"></span>
                                                <a href="#" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                                {/* </div> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-12">
                                <div className="team-item" style={{ margin: '3%', padding: '0' }}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={teamMemberImage3} className="team-img" style={{ width: '100%', height: '30vh', marginBottom: '20px', marginTop: "20%" }} alt="pic" />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="container mt-4 text-left" style={{ paddingLeft: '10%' }}>
                                                <h3 style={{ cursor: 'pointer', transition: 'color 0.3s', textAlign: "left", margin: '0' }} className="team-member-name">
                                                    Prasad Mali
                                                </h3><br></br>
                                                <p style={{ margin: '0' }}>
                                                    Prasad is a dedicated and results-driven team member known for his strong analytical skills and meticulous attention to detail.
                                                    His ability to analyze complex problems and devise effective solutions plays a crucial role in ensuring the success of our projects.
                                                    Prasad's commitment to quality and precision sets a high standard for the team, contributing to the overall excellence of our deliverables.
                                                    to navigate diverse project requirements with ease<br></br>

                                                    Details: <br></br>
                                                    Phone-No. - 9154829321,<br></br>
                                                    Enail- prasad123@gmail.com</p>
                                                {/* <div className="social-icons" style={{ display: 'flex', alignItems: 'center' }}> */}
                                                <a href="#" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <span className="icon-space"></span>
                                                <a href="#" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                                {/* </div> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="team-item" style={{ margin: '3%', padding: '0' }}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={teamMemberImage4} className="team-img" style={{ width: '100%', height: '30vh', marginBottom: '20px', marginTop: "20%" }} alt="pic" />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="container mt-4 text-left" style={{ paddingLeft: '10%' }}>
                                                <h3 style={{ cursor: 'pointer', transition: 'color 0.3s', textAlign: "left", margin: '0' }} className="team-member-name">
                                                    Shwetal Shashikant Talavdekar
                                                </h3><br></br>
                                                <p style={{ margin: '0' }}>
                                                    Shwetal is a versatile and forward-thinking team member with a multifaceted expertise across various aspects of technology.
                                                    His proactive approach and strong leadership qualities contribute significantly to the overall success of our team and projects.
                                                    Shwetal's broad technical skill set, coupled with his ability to adapt to emerging technologies, positions him as a key player in
                                                    driving innovation within our projects.<br></br>

                                                    Details: <br></br>
                                                    Phone-No. - 93543291321,<br></br>
                                                    Enail- shwetal657@gmail.com</p>
                                                {/* <div className="social-icons" style={{ display: 'flex', alignItems: 'center' }}> */}
                                                <a href="#" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <span className="icon-space"></span>
                                                <a href="#" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                                {/* </div> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="team-item" style={{ margin: '3%', padding: '0' }}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={teamMemberImage5} className="team-img" style={{ width: '100%', height: '30vh', marginBottom: '10%', marginTop: "20%" }} alt="pic" />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="container mt-4 text-left" style={{ paddingLeft: '10%' }}>
                                                <h3 style={{ cursor: 'pointer', transition: 'color 0.3s', textAlign: "left", margin: '0' }} className="team-member-name">
                                                    Shoeb Afsar
                                                </h3><br></br>
                                                <p style={{ margin: '0' }}>

                                                    Shoeb is a dynamic and innovative team member who thrives on the cutting edge of technology. His insatiable curiosity and passion for
                                                    exploring the latest advancements in the tech world make him an invaluable asset to our team. Shoeb's ability to think outside the box
                                                    and approach challenges with a fresh perspective ensures that our projects benefit from inventive and forward-looking solutions. <br></br>

                                                    Details:<br></br>
                                                    Phone-No. - 7754995421,<br></br>
                                                    Email- shoeb8667@gmail.com<br></br>
                                                </p>
                                                {/* <div className="social-icons" style={{ display: 'flex', alignItems: 'center' }}> */}
                                                <a href="#" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <span className="icon-space"></span>
                                                <a href="#" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                                {/* </div> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </section >


            </body >

        </>
    );
}