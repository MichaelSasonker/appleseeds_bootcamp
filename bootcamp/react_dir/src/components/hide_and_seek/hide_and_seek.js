import React from 'react';
import './hide_and_seek.css';

class ButtonShowOrHide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {status : 'hidden'};
    }

    ShowAndHide = (e) => {
        console.log(e);
        if (this.state.status === 'hidden') {
            this.setState({status: 'visible'});
        }
        else {
            this.setState({status: 'hidden'});
        }
    }

    render() {
        return (
            <div className='main-cont'>
                <div id="box" >
                    <button type="submit" onClick={this.ShowAndHide}>
                        Show/Hide
                    </button>
                </div>
                <div id="box" className={this.state.status}>
                    <button type="submit">
                        Show/Hide
                    </button>
                </div>
            </div>
        );
    }

}

export default ButtonShowOrHide;


/* App.js
import React from 'react';
import ButtonShowOrHide from './components/hide_and_seek/hide_and_seek'

class App extends React.Component {
  render() {
    return(
        <ButtonShowOrHide />
    );
  };
}

export default App;
*/