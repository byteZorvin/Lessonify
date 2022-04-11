import React from 'react';
import { NavLink } from "react-router-dom";

function Header(props) {

  

    return(
    <header className="header-area">
        <div className="navbar-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img src="images/newLogo.png" alt="Logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav m-auto">
                                    <li className="nav-item ">
                                    <NavLink to="/" exact activeclassname="active">
											Home
										</NavLink>
                                    </li>
                                    <li className="nav-item">{props.auth ?
                                    <NavLink to="/feature" activeclassname="active">
                                            Feature
                                        </NavLink> : null}
                                    
                                    </li>

                                    <li className="nav-item">
                                   {props.auth ? <NavLink to="/profile" activeclassname="active">
                                            Profile
                                        </NavLink> : null}
                                    </li>
        
                                </ul>
                            </div>

                      <div className="navbar-btn d-none d-sm-inline-block">
            {props.auth ? null :
            <NavLink to="/signup" activeclassname="active" className="main-btn">
                Sign up
            </NavLink>}
        </div>
                       
            
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
        }

export default Header;