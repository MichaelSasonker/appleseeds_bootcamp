import React from 'react';

class CustomButton extends React.Component {
    state = { color: this.props.buttonColor};

    OnButtonClicked = () => {
        this.props.onClickEvent(this.state.color);
    }

    render() {
        return (
            <>
                <button type='submit' onClick={this.OnButtonClicked} style={{backgroundColor: this.props.buttonColor}}>
                    {this.props.buttonColor}
                </button>
            </>
        );
    }
}

export default CustomButton;

/* App.js

import React from 'react';
import CustomButton from './components/child_to_father_colors/child_to_father_colors';


const colors = ['blue', 'red', 'yellow'];

class App extends React.Component {

  state = { 
    color: '',
  };

  SetColor = (colorType) => {
    this.setState({ color: colorType});
  } 

  CreateCustomButton = (arr) => {
    return arr.map(element => {
      return (
        <>
          <CustomButton buttonColor={element}  onClickEvent={this.SetColor}/>
        </>
      );
    })
  }

  render() {
    return(
      <div>
        {this.CreateCustomButton(colors)}
        <h1>The color is: {this.state.color} </h1>
      </div>
    );
  };
}

export default App;

*/