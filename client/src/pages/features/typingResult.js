import React from 'react';
import {Link} from 'react-router-dom'
import "./typing.css"

const gameResult = (props) => {

    return (
        <div className="result" >
            <h1>Time ran out</h1>
            <h5>Your final score is {localStorage.getItem('Score')}</h5>
            <h5>Highest Score: {localStorage.getItem('highestScore')}</h5>
            <Link to='/feature'> <button className="rbtn" type="button" >Go back</button> </Link>
        </div>
    );
}

export default gameResult;