import React from 'react';
import './buttons_4.1.css';

const Button = (props) => {
    return (
        <div>
            <button type='submit'>{props.text}</button>
        </div>
    );
};

export default Button;