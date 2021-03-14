import React from 'react';
import QuizTitle from './quiz_title';
import Qst1 from './qst1';
import Qst2 from './qst2';
import './quiz_3.3.css';


const Quiz = () => {
    return (
        <div className='quiz-cont'>
            {QuizTitle()}
            {Qst1()}
            {Qst2()}
        </div>
    );

};

export default Quiz;

