import React from 'react';
import Data from './data';
import GetNames from './names_function';
import GetBornBefore from './born_before_1990';
import Name from './name';
import Card from './card';
import './react_data_massaging_13.1.css';

class DataMassaging extends React.Component {

    state = {
        namesArr: [],
        bornBeforeArr: [],
    }

    componentDidMount() {
        this.setState({ namesArr: GetNames(Data) });
        this.setState({bornBeforeArr: GetBornBefore(Data, 1990)});
    }

    render() {
        return (
            <div className='main-cont'>
                <Name namesArr={this.state.namesArr} />
                <Card bornBefore={this.state.bornBeforeArr}/>
            </div>
        );
    }

}

export default DataMassaging;

/* App.js
import React from 'react';
import DataMassaging from './components/react_data_massaging_13.1/react_data_massaging_13.1';

class App extends React.Component {

    render() {
        return( 
            <div>
                <DataMassaging />
            </div>
        );
    }
}

export default App;
*/