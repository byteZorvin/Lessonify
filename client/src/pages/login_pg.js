import React from 'react';
import "../App.css"
import {Link} from "react-router-dom";

class LogIn extends React.Component {

 state = {
     email : "",
     password : "",
 }


    render() {
        return (
            
      <div className="signupDiv" >
            <form className="signupForm" onSubmit={e=>this.props.onLogIn(e,this.state)} >
                <h3>Log In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={e=>this.setState({email : e.target.value})} type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={e=>this.setState({password : e.target.value })} type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">LogIn</button>
                <p className="forgot-password text-right">
                     <Link to="/login_pg">Forget Password?</Link>
                </p>
            </form>
            </div>

        )
    }
}

export default LogIn;

