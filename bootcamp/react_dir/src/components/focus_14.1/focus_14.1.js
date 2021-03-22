import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
            </div>
        );
    }

}

export default Input;

/* App.js
import React from 'react';
import Input from './components/focus_14.1/focus_14.1';

class App extends React.Component {

    render() {
        return (
            <div>
                <Input />
            </div>
        );
    }

}

export default App;
*/