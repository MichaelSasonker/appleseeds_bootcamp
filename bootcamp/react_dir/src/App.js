
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
