import React, { Component } from 'react';
import { Link ,Navigate} from 'react-router-dom';
import axios from 'axios';
import './typing.css';



class TypingGame extends Component {

    state = {
        // words: ["sigh", "dependent", "quince", "eight", "loving", "drag", "admit", "superficial"],
        score: 0,
        time: 10,
        c : 0,
        randomWord: '',
        gameOver: false
    }

    componentDidMount() {
        console.log("Clock", "componentDidMount");
        this.words = [];
        axios.get(`https://random-word-api.herokuapp.com/all`)
             .then(result => {
                 console.log(result);
                this.words = result.data;
                this.addWordToDOM();
                this.timeInterval = setInterval(() => {
                    this.updateTime();
                }, 1000);
            })

        this.difficulty = localStorage.getItem("difficulty") || "easy";
    }

    componentWillUnmount() {
        console.log("Clock", "componentWillUnmount");
        clearInterval(this.timerID);
    }

    //add to DOM
     
    addWordToDOM = () => {
        let randomWord = this.words[Math.floor(Math.random() * this.words.length)];
        this.setState({randomWord: randomWord});
        this.setState({c : this.state.c  + 1});
        console.log(this.state.c);
        if(this.state.c === 5){
            this.gameOver();
        }
    }

    updateTime = () => {
        this.setState((prevState) => {
            return {...prevState, time: prevState.time - 1}
        });
        if (this.state.time === 0) {
            //clearInterval(this.timeInterval);
            //this.gameOver();
            this.state.time = 10;

            this.addWordToDOM();
            this.updateTime();
        }
    }

    gameOver() {
        const oldHighestScore = localStorage.getItem('highestScore') || 0;
        if(this.state.score > oldHighestScore) {
            localStorage.setItem('highestScore', this.state.score);
        }

        this.setState({gameOver: true});

        localStorage.setItem('Score', this.state.score);
        

        fetch('http://localhost:8080/test/typing', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.props.token
            },
            body: JSON.stringify({
               typingScore : this.state.score
            })
          })
            .then(res => {
              if (res.status === 422) {
                throw new Error(
                  "User not found can't update score"
                );
              }
              if (res.status !== 200 && res.status !== 201) {
                console.log('Error!');
                throw new Error('');
              }
              return res.json();
            })
            .then(resData => {
              console.log(resData);

            })
            .catch(err => {
              console.log(err);
            });


   
        // this.props.history.push({pathname: '/game-result', state: { score: this.state.score } });
        // <Redirect to={{ pathname: "/game-result", state: { score: this.state.score } }} />;
    }

    inputHandler = (e) => {
        const insertedText = e.target.value;

        if (insertedText === this.state.randomWord) {
            this.addWordToDOM();
            this.updateScore();
            this.setState({time : 10});

            e.target.value = "";
            let time = 0;
            // if (this.difficulty === "extreme")
            //     time = 1;
            // else if (this.difficulty === "hard")
            //     time = 2;
            // else if (this.difficulty === "medium")
            //     time = 3;

            this.setState((prevState) => {
                return {...prevState, time: prevState.time + time}
            });
            this.updateTime();
        }
    }

    updateScore() {
        this.setState({score: this.state.score+1});
    }

    render() {
        return (
            <div className="Game">
                {this.state.gameOver ?
                    <Navigate to={{ pathname: "/typingResult"}}   />
                    : null
                }
                <h2>Speed Typer</h2>
                <p>Type the following</p>
                <h1 id="word">{this.state.randomWord}</h1>
                <input id="inputt" type="text" onChange={(e) => this.inputHandler(e)} placeholder="Type the word here...." />
                <p className="TimeContainer">Time left: <span id="time">{this.state.time}s</span></p>
                <p className="ScoreContainer">Score: <span id="score">{this.state.score}</span></p>
                <p>
                    <strong>LEVEL </strong> {this.difficulty}
                    <Link to='/typingHome'> Change Level</Link>
                </p>
            </div>
        );

    }
}

export default TypingGame;