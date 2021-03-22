import React from 'react';
import Axios from 'axios';
import Card from './card';
import SearchBox from './search';
import SelectBox from './select';

import './avatars_13.2.css';

const BASE_URL = 'https://randomuser.me/api?results=10';

class Avatars extends React.Component {

    state = {
        avatarsArr: [
            {
                gender: '',
                firstName: '',
                lastName: '',
                pictureURL: '',
            }
        ],
        currrentSelect: 'gender',
        currentInput: '',
    }

    // GetData = async (url) => {
    //     let respone = await Axios.get(url);
    //     let dataArr = respone.data.results;
    //     let tempArrObj = dataArr.map(obj => {
    //         return ({
    //                     gender: obj.gender,
    //                     firstName: obj.name.first,
    //                     lastName: obj.name.last,
    //                     pictureURL: obj.picture.medium,
    //             });
    //     })
    //     return (tempArrObj);
    //     // this.setState({avatarsArr: tempArrObj})        
    // }
    
    async componentDidMount() {
        let respone = await Axios.get(BASE_URL);
        let dataArr = respone.data.results;
        let tempArrObj = dataArr.map(obj => {
            return ({
                        gender: obj.gender,
                        firstName: obj.name.first,
                        lastName: obj.name.last,
                        pictureURL: obj.picture.medium,
                });
        })
        this.setState({avatarsArr: tempArrObj})
    }

    SelectHandler = (e) => {
        this.setState({currrentSelect: e.target.value});
    }
    
    ChangeHandler = (e) => {
        this.setState({currrentInput: e.target.value});
    }

    render() {
        console.log(this.state)
        return (
            <div className='main-cont'>
                <div className='search-cont'>
                    <SearchBox handleChange={this.ChangeHandler} />
                    <SelectBox keys={['gender', 'firstName', 'lastName']} handleSelect={this.SelectHandler} />
                </div>
                <div className='cards-cont'>
                    {/* {
                        this.state.avatarsArr.map(obj => {
                            return <Card key={obj.firstName} obj={obj}/>
                        })
                    } */}
                    {
                        this.state.avatarsArr.filter(obj => {
                            console.log(this.state)
                            if (obj[this.state.currrentSelect].includes(this.state.currentInput)) {
                                return <Card key={obj.firstName} obj={obj}/>
                            } 
                        })
                        // <Card key={obj.firstName} obj={obj}/>)
                    }
                </div>
            </div>
        );
    }
}

export default Avatars;

/* App.js
import React from 'react';
import Avatars from './components/avatars_13.2/avatars_13.2';

class App extends React.Component {

    render() {
        return( 
            <div>
                <Avatars />
            </div>
        );
    }
}

export default App;
*/