import React from 'react';


class IncrementButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        };
    }

    ButtonClick = (e) => {
        this.setState({ num: this.state.num + 1 });
    }

    render() {
        return (
            <div>
                <label> 
                    {this.state.num}
                </label>
                <button type="submit" onClick={this.ButtonClick}>
                    Increment
                </button>
            </div>
        );
    }

};

export default IncrementButton;

/* App.js
import React from 'react';
import IncrementButton from './components/increment_7.1/increment_7.1'

class App extends React.Component {
  render() {
    return(
      <div>
        <IncrementButton />
      </div>
    );
  };
}

export default App;
*/