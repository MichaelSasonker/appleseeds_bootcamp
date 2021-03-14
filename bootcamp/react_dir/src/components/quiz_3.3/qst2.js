import React from 'react';
import Qst2Title from './qst2_title';
import Qst2Input from './qst2_input';

const Qst2 = () => {
    return (
        <div className='qst2-cont'>
            {Qst2Title()}
            {Qst2Input()}
        </div>
    );
};

export default Qst2;