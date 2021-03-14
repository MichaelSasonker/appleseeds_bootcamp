import React from 'react';
import ReactDOM from 'react-dom';

const BasicsOfJSX = () => {
    const data = ['hello', 'world'];
    const num1 = 5;
    const num2 = 6;
    const str = 'I love React!';
    return (
        <div>
            {data.join(' ')}
            <br/>
            {num1} + {num2} = {num1 + num2} 
            <br/>
            The string length is {str.length}
        </div>
    );
};

export default BasicsOfJSX;