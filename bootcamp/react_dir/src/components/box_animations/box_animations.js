import React from 'react';
import './box_animations.css';

class Box extends React.Component {
    state = {
        status: 'hidden',
    }

    componentDidMount() {
        const newDivList = document.querySelectorAll('.box');
        setTimeout(() => {
            newDivList.forEach( (box) => {
                box.className += this.state.status;
            });
        }, 4000);
    }

    render() {
        return (
            <div className='main-cont'>
                <div className='box' style={{ width: this.props.width}}></div>
            </div>
        );
    };

}

export default Box;

/* App.js
import React from 'react';
import Box from './components/box_animations/box_animations'

class App extends React.Component {
  render() {
    return(
      <div>
        <Box width='100px'/>
        <Box width='150px'/>
        <Box width='70px'/>
      </div>
    );
  };
}

export default App;
*/