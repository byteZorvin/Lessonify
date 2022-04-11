import React from "react";
function Home(){
    return(
        <div>
            <div id="home" className="header-hero bg_cover d-lg-flex align-items-center" style={{backgroundImage: "url('./images/header-hero.jpg')"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-hero-content">
                                <h1 className="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">Lorem ipsum Lorem ipsum Lorem ipsum</h1>
                                <p className="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
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
                                <h3 className="title"><span>Know </span> More About.</h3>
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
                                <h3 className="title">Lorem Ipsum</h3>
                                <ul className="about-line">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <p className="text">Duis et metus et massa tempus lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ultricies, orci molestie blandit interdum. <br/> <br/> ipsum ante pellentesque nisl, eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.</p>
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
                                <h3 className="title">Learn More About Us In Stats</h3>
                            </div> 
                        </div>
                    </div>
                    <div className="analysis-counter">
                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <span className="count"><span className="counter">1720</span><span className="plus">+</span></span>
                                    <p className="text">Projects Done</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <span className="count"><span className="counter">98</span><span className="plus">%</span></span>
                                    <p className="text">Client Satisfaction</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                                    <span className="count"><span className="counter">30</span><span className="plus">+</span></span>
                                    <p className="text">Employee</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                    <span className="count"><span className="counter">9970</span><span className="plus">+</span></span>
                                    <p className="text">Coffee Consumed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonial" class="testimonial-area pt-70">
                <div class="container">
                    <div class="header-hero-content text-center">
                        <h1 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</h1>
                        <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;