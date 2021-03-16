import React from 'react';
import './changing_box_8.2.css';

class ChangingBox extends React.Component {
    state = {
        nameClass: ' circle',
        colorsArr: ['yellow', 'green', 'blue', 'red', 'orange', 'black', 'pink', 'purple', 'white'],
    }

    componentDidMount() {
        const box = document.querySelector('.box');
        let i = 0;
        setInterval(() => {
            box.style.backgroundColor = this.state.colorsArr[i];
            i = (i + 1) % this.state.colorsArr.length;
            if (i % 5 === 0) {
                box.className += this.state.nameClass;
            }
            else {
                box.className = 'box';
            }
        }, 1000);
    }

    render() {
        return (
            <div className='box'></div>
        );
    };

}

export default ChangingBox;

/* App.js
import React from 'react';
import ChangingBox from './components/changing_box/changing_box_8.2'

class App extends React.Component {
  render() {
    return(
      <div>
        <ChangingBox />
      </div>
    );
  };
}

export default App;
*/