
import React from 'react';

function DisplayResult(props) {
    const correctAnswer = props.resultList.filter( item => item === true ).length;
    const quesShouldAttempt = Math.floor(props.timerLimit / props.oneQuesAttemptTime);
    const efficiencyPerc = Math.floor((correctAnswer/props.resultList.length)*100);
    const score = correctAnswer / props.resultList.length;

    fetch('http://localhost:8080/test/quiz', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + props.token
            },
            body: JSON.stringify({
               quizScore : correctAnswer
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

  


    return (
        <div className="col-10 offset-1 main-content display-result" data-item={props.resultList}>
            <p>
                Your score : {score}
            </p>
            <ul>
                <li>Total time-frame - <b>{props.timerLimit} seconds.</b></li>
                <li>Total Questions Attempted - <b>{props.resultList.length}</b></li>
                <li>Correct Answer - <b>{correctAnswer}</b></li>
                <li>Accuracy - <b>{isNaN(efficiencyPerc) ? 0 : efficiencyPerc} %</b></li>
            </ul>
        </div>
    )
}

export default DisplayResult;