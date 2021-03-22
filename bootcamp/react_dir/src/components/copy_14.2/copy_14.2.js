import React from 'react';
import TextArea from './textarea';
import Button from './button';
import './copy_14.2.css'

class CopyText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        }

    }

    ChangeHandler = (term) => {
        this.setState({ inputValue: term });
    }

    render() {
        return (
            <div className='main-cont'>
                <TextArea handleChange={this.ChangeHandler} />
                <Button term={this.state.inputValue} />
            </div>
        );
    }
}

export default CopyText;

/* App.js
import React from 'react';
import CopyText from './components/copy_14.2/copy_14.2';

class App extends React.Component {

    render() {
        return (
            <div>
                <CopyText />
            </div>
        );
    }

}

export default App;
*/