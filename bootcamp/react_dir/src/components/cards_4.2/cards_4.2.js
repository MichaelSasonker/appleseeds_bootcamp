import React from 'react';
import './cards_4.2.css';

const Card = (props) => {
    return (
        <div className='main-cont'>
            <img src={props.srcImg}/>
            <h2>{props.textTitle}</h2>
            <p>{props.textPar}</p>
            <div className='links-cont'>
                <a href='#'>{props.textLink}</a>
                <a href='#'>{props.textLink}</a>
            </div> 
        </div>
    );
};

export default Card;