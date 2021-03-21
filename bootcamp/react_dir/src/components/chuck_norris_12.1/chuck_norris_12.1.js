import React from 'react';
import Axios from 'axios';
import './chuck_norris_12.1.css';

const BASE_URL = 'https://api.chucknorris.io/jokes/random';
const CATEGORIES_URL = 'https://api.chucknorris.io/jokes/categories';
const RANDOM_CATEGORY_JOKE = 'https://api.chucknorris.io/jokes/random?';

class ChuckNorris extends React.Component {

    state = {
        joke: '',
        categories: [],
        jokeByCat:'',
    }

    GetData = async (e) => {
        let respone = await Axios.get(BASE_URL);
        this.setState({joke: respone.data.value});
    }

    async componentDidMount() {
        let respone = await Axios.get(CATEGORIES_URL);
        this.setState({categories: respone.data});
    }

    OnSelected = async (e) => {
        let selectedValue = e.target.value;
        let respone = await Axios.get(RANDOM_CATEGORY_JOKE + selectedValue);
        this.setState({jokeByCat: respone.data.value});
    } 

    render() {
        return (
            <div className='main-cont'>
                <div className='btn-cont'>
                    <button type='submit' onClick={this.GetData} >
                        Get Random Joke
                    </button>
                </div>
                <div className='joke-cont'>
                    {this.state.joke}
                </div>
                <div className='category-cont'>
                    <div className='joke-cont'>
                        { this.state.jokeByCat }
                    </div>
                    <select onChange={this.OnSelected}>
                     { this.state.categories.map(cat => (<option key={cat}> {cat}</option>)) }
                    </select>
                </div>
            </div>
        );
    }
}

export default ChuckNorris;

/* App.js
import React from 'react';
import ChuckNorris from '../src/components/chuck_norris_12.1/chuck_norris_12.1';

class App extends React.Component {

    render() {
        return (
            <div>
                <ChuckNorris />
            </div>
        );
    }
}

export default App;
*/