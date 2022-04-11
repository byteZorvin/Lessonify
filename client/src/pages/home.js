import React from "react";

class Home extends React.Component{
    render(){
        return(
            <div>
                <div id="home" className="header-hero bg_cover d-lg-flex align-items-center" style={{backgroundImage: "url('./images/header-hero.jpg')"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="header-hero-content">
                                    <h2 className="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">Making a difference in the lives of early and slow learners</h2>
                                    {/* <p className="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">May be you need us.</p> */}
                                    <div className="header-play wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                                        <a className="play-btn" href="#">Explore</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-hero-image d-flex align-items-center wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="1.1s">
                        <div className="image">
                            <img src="images/hero-image.png" alt="Hero Image"/>
                        </div>
                    </div>

                    <div className="header-shape">
                        <img src="images/shape/header-shape.png" alt="shape"/>
                    </div>
                </div>
                <section id="about" className="about-area pt-110 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="about-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <h6 className="welcome">WELCOME</h6>
                                    <h3 className="title">Know more about <span>Lessonify</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className = "row align-items-center">
                            <div className = "col-lg-6">
                                <div className="about-image mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src="images/remote-learning.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <h3 className="title">Assessments</h3>
                                    <ul className="about-line">
                                        <p className="text">Lessonify uses interactive learning assessments to identify gaps in a child’s academic profile.</p>
                                        <li></li>
                                    </ul>
                                    <h3 className="title">Progress reports</h3>
                                    <ul className="about-line">
                                        <p className="text">Get personalized detailed error reports on their learning and mistakes.</p>
                                        <li></li>
                                    </ul>
                                    <h3 className="title">Practice Sections</h3>
                                    <ul className="about-line">
                                        <p className="text">Interactive lessons and trusted methods to assist students in learning at their own pace</p>
                                        <li></li>
                                    </ul>

                                    <div className="about-counter pt-20">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="analysis-area pt-115 pb-120 bg_cover" style={{backgroundImage: "url('./images/analysis.jpg')"}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="analysis-title text-center pb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <h4 className="title">How common are Specific Learning Disabilities?</h4>
                                </div>
                            </div>
                        </div>
                        <div className="analysis-counter">
                            <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                                    <span className="count"><span className="counter">33</span><span className="plus">%</span></span>
                                    <p className="text">Specific Learning Disability</p>
                                </div>
                            </div>
                                <div className="col-md-3 col-6">
                                    <div className="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                                        <span className="count"><span className="counter">10</span><span className="plus">%</span></span>
                                        <p className="text">Dyslexia</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <span className="count"><span className="counter">14</span><span className="plus">%</span></span>
                                        <p className="text">Dysgraphia</p>
                                    </div>
                                </div>

                                <div className="col-md-3 col-6">
                                    <div className="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                        <span className="count"><span className="counter">6</span><span className="plus">%</span></span>
                                        <p className="text">Dyscalculia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonial" class="testimonial-area pt-70">
                    <div class="container">
                        <div class="header-hero-content text-center">
                            <h2 class="wow fadeInUp moto" data-wow-duration="1s" data-wow-delay="0.2s">Eliminate the tears and the stress your child with SLD experiences <br/>when reading or learning with <span>Lessonify<span/></span></h2>
                            <br></br>
                            <br></br>
                            <p class="wow fadeInUp moto-text" data-wow-duration="1s" data-wow-delay="0.5s">Lessonify team believe in tech for good and want technology to be a part of special needs education industry.</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
