import React from 'react';

function Footer() {
    return(
        <footer id="footer" className="footer-area bg_cover" style={{backgroundImage: "url('./images/footer-bg.jpg')"}}>
            <div className="footer-shape">
                <img src="images/shape/footer-shape.png" alt="footer shape"/>
            </div>
            <div className="container">
                <div className="footer-widget pt-30 pb-70">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 order-sm-1 order-lg-1">
                            <div className="footer-about pt-40 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.3s">
                                <a href="#">
                                    <img src="images/newLogo.png" alt="Logo"/>
                                </a>
                                {/* <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, repudiandae! Totam, nemo sed? Provident.</p>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                            </div> 
                        </div>
                        <div className="col-lg-3 col-sm-6 order-sm-3 order-lg-2">
                            <div className="footer-link pt-40 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="footer-title">
                                    <h5 className="title">Features</h5>
                                </div>
                                <ul>
                                    <li><a href="#">Assessments</a></li>
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Practice</a></li>
                                </ul>
                            </div> 
                        </div>
                        <div className="col-lg-3 col-sm-6 order-sm-4 order-lg-3">
                            <div className="footer-link pt-40 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.7s">
                                <div className="footer-title">
                                    <h5 className="title">About Us</h5>
                                </div>
                                <ul>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">Lorem ipsum dolor</a></li>
                                    <li><a href="#">Lorem ipsum dolor</a></li>
                                    <li><a href="#">Lorem ipsum dolor</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 order-sm-2 order-lg-4">
                            <div className="footer-contact pt-40 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.9s">
                                <div className="footer-title">
                                    <h5 className="title">Contact Info</h5>
                                </div>
                                <div className="contact pt-10">
                                    <p className="text"> Jabalpur, India</p>
                                    <p className="text">lessonify@gmail.com</p>
                                    <p className="text">+99 000 000 00 00</p>

                                    <ul className="social mt-40">
                                        <li><a href="#"><i className="lni-facebook"></i></a></li>
                                        <li><a href="#"><i className="lni-twitter"></i></a></li>
                                        <li><a href="#"><i className="lni-instagram"></i></a></li>
                                        <li><a href="#"><i className="lni-linkedin"></i></a></li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;