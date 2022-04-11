import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import "./typing.css";
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Divider from '@material-ui/core/Divider';




const TypingHome = (props) => {

    const selectedDifficulty = localStorage.getItem('difficulty') || 'easy';
    const [difficulty, setDifficulty] = useState(selectedDifficulty);
    const [start, setStart] = useState(false);

    const formHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('difficulty', difficulty);
        setStart(true);
    }

    return (
        <div className="typing" >
            {start ? <Navigate to="/typingGame" /> : null }
            <h3> Welcome to Typing Game </h3>
            {/* <Divider /> */}
            <h5> Enjoy the thrill of typing in this game </h5>

            <form className="tform" onSubmit={formHandler}>
                <strong>Choose your Difficulty Level</strong>
                <select onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                    <option value='extreme'>Extreme</option>
                </select>
                <button type="submit">Lets Start</button>
            </form>

        </div>
    );
}

export default TypingHome;
