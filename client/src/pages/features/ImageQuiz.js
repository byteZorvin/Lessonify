import React, { Component } from 'react';
import "./bootstrap-min.css"

import './ImageQuiz.css';

import MainContent from './image_quiz_compo/MainContent';
import Hero from './image_quiz_compo/Hero';
import Continue from './image_quiz_compo/Continue';
import DisplayResult from './image_quiz_compo/DisplayResult';
import PlayAgain from './image_quiz_compo/PlayAgain';

const getDataApi = (_self) =>{
  const getRandomItem = (arr) => {
    let item = arr[Math.floor(Math.random() * arr.length)];

    if(item.indexOf(' ') >= 0) {
      item = item.replace(/ /g,"_");
    }
    return item;
  };

  fetch('https://demo6817798.mockable.io/getImageQuizAppData')
    .then( (response) => response.json())
    .then((data) => {
      let listOfItem = [],
          itemLists = [],
          imageObj = {
            prefix: 'img/things/',
            suffix: '.jpg'
          };
      
      itemLists = data.list.map( (item) => item.name);

      for(let i=0; i < 4; i++) {
        let randomItem = getRandomItem(itemLists);
        listOfItem.push(randomItem);
      }

      const selectedPhotoName = getRandomItem(listOfItem);
      const randomUrl = 'https://www.randomlists.com/'+ imageObj.prefix +''+ selectedPhotoName +''+imageObj.suffix;

      _self.setState({
        imageUrl: randomUrl,
        correctAnswer: selectedPhotoName,
        setOfAnswer: listOfItem,
        showContinueBtn: false
      })
  })
}

class ImageQuiz extends Component {
  constructor(props) {
    super(props);
    this.enableContinueBtn = this.enableContinueBtn.bind(this);
    this.newPuzzle = this.newPuzzle.bind(this);
    this.showResult = this.showResult.bind(this);
  }

  static initialState = () => ({
    imageUrl: '',
    correctAnswer: '',
    setOfAnswer: [],
    savedResult: [],
    showContinueBtn: false,
    timerLimit: 40,
    isTimerReached: false,
    oneQuesAttemptTime: 5
  })

  state = ImageQuiz.initialState();

  showResult = () => {
    this.setState({
      isTimerReached: true,
      showContinueBtn: false
    })
  }

  resetQuiz = () => {
    var _self = this;
    this.setState(ImageQuiz.initialState());
    getDataApi(_self);
  }

  newPuzzle = () => {
    var _self = this;
    const allOptionsObj = document.querySelectorAll('.item-options .option');
    for(var obj of allOptionsObj) {
      obj.classList.remove('red', 'green');
    }
    this.setState({
      imageUrl: ''
    })
    getDataApi(_self);
  }

  enableContinueBtn = (isAnswerCorrect) => {
    this.setState( (prevState) => ({
      showContinueBtn: true,
      savedResult: prevState.savedResult.concat(isAnswerCorrect)
    }))
  }

  componentDidMount() {
    var _self = this;
    getDataApi(_self);
  }

  render() {
    let {imageUrl, correctAnswer, setOfAnswer, showContinueBtn, timerLimit, savedResult, oneQuesAttemptTime} = this.state;
    return (
      <div className="container quizBox">
        <Hero />
        { !this.state.isTimerReached
          ? <MainContent 
              imageUrl={imageUrl} 
              correctAnswer= {correctAnswer}
              setOfAnswer={setOfAnswer}
              showContinueBtn={showContinueBtn}
              enableContinueBtn={this.enableContinueBtn}
              timerLimit={timerLimit}
              showResult={this.showResult}
            />
          : <div>
              <DisplayResult 
                resultList={savedResult}
                timerLimit={timerLimit}
                oneQuesAttemptTime={oneQuesAttemptTime}
                token = {this.props.token}
              />
              <PlayAgain resetQuiz={this.resetQuiz}/>
            </div>
        }        
        { showContinueBtn && <Continue newPuzzle={this.newPuzzle}/>}
    
      </div>
    )
  }
}

export default ImageQuiz;
