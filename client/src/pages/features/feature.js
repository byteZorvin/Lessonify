import React from 'react'
import { NavLink ,Link} from "react-router-dom";

class Feature extends React.Component{
    render(){
        return(
            <div>
            <section id="services" class="service-section pt-150">
                <div class="shape shape-3">
                    <img src="assets/img/shapes/shape-3.svg" alt=""/>
                </div>
                <div class="container">
                    {/* <div class="row">
                        <div class="col-xl-8 mx-auto">
                            <div class="section-title text-center mb-55">
                                <span class="wow fadeInDown" data-wow-delay=".2s"></span>
                                <h2 class="mb-15 wow fadeInUp" data-wow-delay=".4s"></h2>
                                <p class="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    dinonumy
                                    <br class="d-none d-lg-block"/> eirmod tempor invidunt ut labore et dolore magn.</p>
                            </div>
                        </div>
                    </div> */}
                    <div class="row">
                        <h3>Assessments</h3>
                        <div><br/></div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item mb-30">
                                <div class="service-icon mb-25">
                                    <img src="images/laptop.png"/>
                                </div>
                                <div class="service-content">
                                    <h4>Typing Test</h4>
                                    <p>Test the acurracy and speed in ords per minute by typing various random words</p>
                                    <Link to="/typingHome" class="read-more">Attempt <i class="lni lni-arrow-right"></i></Link>
                                </div>
                                <div class="service-overlay img-bg"></div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item mb-30">
                                <div class = "service-icon mb-25">
                                    <img src="images/choose.png"/>
                                </div>
                                <div class="service-content">
                                    <h4>Peabody Picture Vocabulary Test</h4>
                                    <p>This test help in identifying various objects with the help of images.</p>
                                    <Link to="/imagequiz" class="read-more">Attempt<i class="lni lni-arrow-right"></i></Link>
                                </div>
                                <div class="service-overlay img-bg"></div>
                            </div>
                        </div>
                        {/* <div class="col-lg-4 col-md-6">
                            <div class="service-item mb-30">
                                <div class="service-icon mb-25">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="51.275" height="58.44" viewBox="0 0 51.275 58.44">
                                        <g id="noun_Stomach_576009" transform="translate(-4.423 -0.572)">
                                            <g id="Group_152" data-name="Group 152" transform="translate(4.423 0.572)">
                                                <path id="Path_470" data-name="Path 70"
                                                    d="M53.065,18.13A8.5,8.5,0,0,0,46.853,13.3l-.016,0a4.4,4.4,0,0,1-3.089-2.131c-.217-.38-.417-.76-.592-1.143a11.73,11.73,0,0,1-.965-6.237,2.867,2.867,0,0,0-5.69-.7,17.283,17.283,0,0,0,1.446,9.331l.014.031c1.392,3.02-1,6.211-1.718,9.108a22.519,22.519,0,0,1-3.734,7.887,25.8,25.8,0,0,1-14.583,9.684l-.107.025a7.8,7.8,0,0,0-4.689,3.13,7.238,7.238,0,0,1-2.2,2.062A13.119,13.119,0,0,0,7.691,47.1a13.667,13.667,0,0,0-3.263,9.124,2.866,2.866,0,0,0,2.862,2.785l.082,0a2.867,2.867,0,0,0,2.785-2.946,7.737,7.737,0,0,1,1.451-4.7.982.982,0,0,1,1.589,0,7.79,7.79,0,0,0,2.5,2.149,27.063,27.063,0,0,0,12.968,3.309c.136,0,.273,0,.409,0A27.048,27.048,0,0,0,53.065,18.13ZM29.016,52.608c-.114,0-.231,0-.346,0a22.843,22.843,0,0,1-10.95-2.793,3.36,3.36,0,0,1-1.767-3.525A3.57,3.57,0,0,1,18.5,43.315c.078-.025.161-.046.245-.065s.143-.033.214-.049a30.669,30.669,0,0,0,14.072-7.92,27.067,27.067,0,0,0,7.521-13.739c.009-.049.021-.105.031-.168A4.67,4.67,0,0,1,41.844,18.8a4.824,4.824,0,0,1,3.418-1.427A4.324,4.324,0,0,1,48.79,19.13a5.251,5.251,0,0,1,.483.813A22.622,22.622,0,0,1,51.5,29.981,22.959,22.959,0,0,1,29.016,52.608Z"
                                                    transform="translate(-4.423 -0.572)" fill="#393e46" />
                                                <path id="Path_71" data-name="Path 71"
                                                    d="M43.851,43.011a1.578,1.578,0,0,1,1.279,2.6,19.953,19.953,0,0,1-14.8,6.97c-.1,0-.2,0-.294,0a20.012,20.012,0,0,1-8.224-1.768l-.014-.007a1.2,1.2,0,0,1-.039-2.147,1.39,1.39,0,0,1,.233-.106A33.62,33.62,0,0,0,35.155,41.34a1.562,1.562,0,0,1,1.638-.285c.111.046.22.1.329.15.777.384,1.454.953,2.242,1.315a9.56,9.56,0,0,0,4.453.495Z"
                                                    transform="translate(-5.596 -3.409)" fill="#00adb5" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="service-content">
                                    <h4>Gastroenterology</h4>
                                    <p>Lorem ipsum dolor sit amet, consetet
                                        sadipscing elitr, sed dinonumy eirmod tempor invidunt.</p>
                                    <a href="#" class="read-more">Read More <i class="lni lni-arrow-right"></i></a>
                                </div>
                                <div class="service-overlay img-bg"></div>
                            </div>
                        </div> */}
                        <div><br/></div>
                        <h3>Practice</h3>
                        <div><br/></div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item mb-30">
                                <div class="service-icon mb-25">
                                    <img src = "images/puzzle.png"/>
                                </div>
                                <div class="service-content">
                                    <h4>Falling Words Game</h4>
                                    <p>Lorem ipsum dolor sit amet, consetet
                                        sadipscing elitr, sed dinonumy eirmod tempor invidunt.</p>
                                    {/* <a href="#" class="read-more">Play<i class="lni lni-arrow-right"></i></a> */}
                                    <NavLink to="/memorygame" exact activeclassname="active" className="read-more">
										Play
									</NavLink>
                                    <i class="lni lni-arrow-right"></i>
                                </div>
                                <div class="service-overlay img-bg"></div>
                            </div>
                        </div>
                        {/* <div class="col-lg-4 col-md-6">
                            <div class="service-item mb-30">
                                <div class="service-icon mb-25">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.302" height="58.633" viewBox="0 0 43.302 58.633">
                                        <g id="noun_womb_1744327" transform="translate(-22.94 -12.449)">
                                            <path id="Path_81" data-name="Path 81"
                                                d="M59,49.642V50c0,.434-.868.583-1.167.655a2.227,2.227,0,0,1-1.843-.135,8.716,8.716,0,0,1-1.48-1.252l-1.793-1.7L51.68,46.526a.755.755,0,1,0-1.067,1.067A4.98,4.98,0,0,1,52.2,50.439c.192,1.722-1.423,3.223-2.782,3.963a12.192,12.192,0,0,1-5.841,1.124,7.947,7.947,0,0,1-5.635-2.277A17.36,17.36,0,0,1,33.673,46.4a7.57,7.57,0,0,1-.384-2.355v-.064a2.583,2.583,0,0,0-.975-1.971A6.88,6.88,0,1,1,43.427,35.22a7.115,7.115,0,0,1,.043,2.618A1.515,1.515,0,0,1,41.7,39.048l-.178-.043a5.329,5.329,0,0,0-1.473-.213H39.2a.754.754,0,0,0-.761.6.711.711,0,0,0,.711.854h.9a3.643,3.643,0,0,1,1.85.512l.512.313.406.228.27.157a.711.711,0,0,0,.9-.121l1-1.025a.953.953,0,0,1,1.323-.1.968.968,0,0,1,.27,1.124l-.939,2.8a1.615,1.615,0,0,1-1.53,1.1H42.695a.861.861,0,0,0,0,1.715h2.013a3.1,3.1,0,0,0,2.938-2.134l.975-3.095a2.277,2.277,0,0,1,2.213-1.594h.036a2.191,2.191,0,0,1,1.885,1.06l3.778,6.311a3.458,3.458,0,0,0,1.878,1.416A.776.776,0,0,1,59,49.642Z"
                                                transform="translate(-0.985 -4.655)" fill="#00adb5" />
                                            <path id="Path_82" data-name="Path 82"
                                                d="M66.242,34.145A21.651,21.651,0,1,0,26.177,45.49h0l.183.256a23.146,23.146,0,0,0,1.582,2.2L44.569,71.082,61.247,47.973a20.214,20.214,0,0,0,1.582-2.2l.183-.249h0A21.461,21.461,0,0,0,66.242,34.145Zm-39.991-.051A18.311,18.311,0,0,1,58.786,22.528a1.714,1.714,0,0,1-.842.168,3.171,3.171,0,0,0-3.281,3.281A1.3,1.3,0,0,1,53.2,27.443a3.164,3.164,0,0,0-3.274,3.274,1.3,1.3,0,0,1-1.465,1.465,3.171,3.171,0,0,0-2.351.923.953.953,0,0,0,1.348,1.348,1.34,1.34,0,0,1,1.091-.359A3.157,3.157,0,0,0,51.82,30.82a1.3,1.3,0,0,1,1.465-1.465,3.164,3.164,0,0,0,3.281-3.318,1.3,1.3,0,0,1,1.465-1.465,3.369,3.369,0,0,0,1.875-.535A18.311,18.311,0,1,1,26.251,34.094Z"
                                                fill="#393e46" />
                                            <path id="Path_83" data-name="Path 83"
                                                d="M59.013,49.974v-.356a.776.776,0,0,0-.62-.712,3.462,3.462,0,0,1-1.838-1.475L52.78,41.084a2.194,2.194,0,0,0-1.888-1.061h-.036a2.28,2.28,0,0,0-2.215,1.6l-.983,3.1a3.106,3.106,0,0,1-2.942,2.137H42.7a.862.862,0,0,1,0-1.717h1.425a1.617,1.617,0,0,0,1.532-1.1l.926-2.743a.969.969,0,0,0-.271-1.126.955.955,0,0,0-1.339.114l-.99,1.012a.712.712,0,0,1-.9.121l-.264-.121-.406-.228-.513-.313a3.647,3.647,0,0,0-1.852-.513h-.862a.712.712,0,0,1-.712-.855.755.755,0,0,1,.712-.648h.826a5.336,5.336,0,0,1,1.475.214l.178.043a1.517,1.517,0,0,0,1.8-1.2,7.124,7.124,0,0,0-.036-2.622,6.91,6.91,0,1,0-11.1,6.775,2.586,2.586,0,0,1,.976,1.973v.064a7.58,7.58,0,0,0,.385,2.358,17.382,17.382,0,0,0,4.274,6.853,7.957,7.957,0,0,0,5.642,2.28,12.14,12.14,0,0,0,5.849-1.126c1.368-.712,2.978-2.244,2.785-3.968a4.987,4.987,0,0,0-1.589-2.849.756.756,0,1,1,1.069-1.069l1,1.069,1.76,1.7a8.727,8.727,0,0,0,1.482,1.254,2.23,2.23,0,0,0,1.845.135C58.144,50.558,59.013,50.4,59.013,49.974Z"
                                                transform="translate(-0.997 -4.602)" fill="#00adb5" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="service-content">
                                    <h4>Gynecology</h4>
                                    <p>Lorem ipsum dolor sit amet, consetet
                                        sadipscing elitr, sed dinonumy eirmod tempor invidunt.</p>
                                    <a href="#" class="read-more">Read More <i class="lni lni-arrow-right"></i></a>
                                </div>
                                <div class="service-overlay img-bg"></div>
                            </div>
                                </div>*/}
                        {/* <div class="col-lg-4 col-md-6">
                            <div class="service-item mb-30">
                                <div class="service-icon mb-25">
                                    <svg id="noun_dental_care_2692540" data-name="noun_dental care_2692540" xmlns="http://www.w3.org/2000/svg"
                                        width="70.285" height="58.102" viewBox="0 0 70.285 58.102">
                                        <g id="Group_156" data-name="Group 156">
                                            <path id="Path_84" data-name="Path 84"
                                                d="M17.336,17C14.2,22.319,7.223,26.405,0,27.04c0,13.45,3.61,28.3,17.337,32.13C31.061,55.34,34.674,40.489,34.674,27.04,27.373,25.929,20.467,22.319,17.336,17Zm0,37.576c-8.564-2.144-13-15.642-13-24.21,3.65-.224,10.44-2.565,13-7.149,2.561,4.584,9.352,6.925,13,7.149C30.338,38.934,25.9,52.432,17.337,54.576Zm2.144-17.593V32.655h-4.33v4.329h-4.33v4.33h4.33v4.33h4.33v-4.33h4.33v-4.33Z"
                                                transform="translate(0 -1.069)" fill="#393e46" />
                                            <path id="Path_85" data-name="Path 85"
                                                d="M72.777,7.735a7.668,7.668,0,0,0-2.063-5.6A7.393,7.393,0,0,0,66.72.127,8.515,8.515,0,0,0,65.246,0c-3.365.066-5.6,1.62-9.029,1.58C52.784,1.62,50.545.066,47.185,0a8.411,8.411,0,0,0-1.476.126,7.4,7.4,0,0,0-3.994,2.011,7.667,7.667,0,0,0-2.065,5.6A19.9,19.9,0,0,0,44,20.6a21.726,21.726,0,0,0-.974,6.388,17.447,17.447,0,0,0,1.408,7.128,8.114,8.114,0,0,0,1.477,2.28,3.178,3.178,0,0,0,2.136,1.085v0h.06l.078,0A2.689,2.689,0,0,0,50.2,36.391a11.413,11.413,0,0,0,1.632-3.6c.652-2.094,1.256-4.552,2.039-6.379a7.347,7.347,0,0,1,1.236-2.087,1.47,1.47,0,0,1,1.107-.573c.538-.008,1.086.351,1.761,1.486a35.937,35.937,0,0,1,2.431,6.94A19.3,19.3,0,0,0,61.652,35.5a4.76,4.76,0,0,0,.947,1.289,2.508,2.508,0,0,0,1.652.7H64.3A3.164,3.164,0,0,0,66.519,36.4c1.664-1.776,2.854-5.148,2.886-9.41a21.74,21.74,0,0,0-.974-6.387A19.876,19.876,0,0,0,72.777,7.735ZM65.619,33.029a5.612,5.612,0,0,1-.982,1.551,1.632,1.632,0,0,1-.305.255,6.733,6.733,0,0,1-.978-2.028c-.664-1.912-1.28-4.633-2.2-6.964A10.906,10.906,0,0,0,59.382,22.7a4.163,4.163,0,0,0-3.167-1.568h0a4.787,4.787,0,0,0-4.026,2.79c-1.262,2.2-1.954,5.131-2.675,7.507a17.169,17.169,0,0,1-1.048,2.844,2.546,2.546,0,0,1-.376.561,2.072,2.072,0,0,1-.474-.45c-.927-1.091-2-3.925-1.977-7.4A19.133,19.133,0,0,1,46.7,20.754a1.3,1.3,0,0,0-.236-1.273A17.2,17.2,0,0,1,42.268,7.737a5.021,5.021,0,0,1,1.3-3.753,4.794,4.794,0,0,1,2.587-1.277,5.972,5.972,0,0,1,1.028-.09c2.294-.066,4.822,1.541,9.031,1.58,4.206-.039,6.731-1.646,9.029-1.58a6.188,6.188,0,0,1,1.026.088,4.789,4.789,0,0,1,2.586,1.279,5.021,5.021,0,0,1,1.3,3.753,17.2,17.2,0,0,1-4.194,11.744,1.312,1.312,0,0,0-.239,1.273,19.049,19.049,0,0,1,1.06,6.236A14.968,14.968,0,0,1,65.619,33.029Z"
                                                transform="translate(-2.493 0)" fill="#00adb5" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="service-content">
                                    <h4>Dental Surgery</h4>
                                    <p>Lorem ipsum dolor sit amet, consetet
                                        sadipscing elitr, sed dinonumy eirmod tempor invidunt.</p>
                                    <a href="#" class="read-more">Read More <i class="lni lni-arrow-right"></i></a>
                                </div>
                                <div class="service-overlay img-bg"></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default Feature;