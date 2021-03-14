import React from 'react';
import Qst1Title from './qst1_title';
import Qst1Input from './qst1_input';

const Qst1 = () => {
    return (
        <div className='qst1-cont'>
            {Qst1Title()}
            {Qst1Input()}
        </div>
    );
};

export default Qst1;