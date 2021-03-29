import React from 'react';
import TextParagraph from './text_par';
import LoremIpsum from 'react-lorem-ipsum'; 

const Text = () => {



    return (
        <React.Fragment>
            <TextParagraph 
                text={LoremIpsum()}
                maxLength={12}
            />
        </React.Fragment>
    )

}

export default Text;

/* App.js
import React from 'react';
import Text from './components/text_18.1/text_18.1';

const App = () => {

    return (
        <div>
            <Text />
        </div>
    );
}

export default App;
*/