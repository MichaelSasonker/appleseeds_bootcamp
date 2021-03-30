import React from 'react';
import Axios from 'axios';
import './chuck_norris_12.1.css';

const BASE_URL = 'https://api.chucknorris.io/jokes/random';
const CATEGORIES_URL = 'https://api.chucknorris.io/jokes/categories';
const RANDOM_CATEGORY_JOKE = 'https://api.chucknorris.io/jokes/random?';

const ChuckNorris = () => {

    const [joke, setJoke] = React.useState('');
    const [categories, setCategories] = React.useState([]);
    const [jokeByCat, setJokeByCat] = React.useState('');

    const GetData = async (e) => {
        let respone = await Axios.get(BASE_URL);
        setJoke(respone.data.value);
    }

    React.useEffect(() => {
        (async () => {
            let respone = await Axios.get(CATEGORIES_URL);
            setCategories(respone.data);
        })();

    }, []);

    const OnSelected = async (e) => {
        let selectedValue = e.target.value;
        let respone = await Axios.get(RANDOM_CATEGORY_JOKE + selectedValue);
        setJokeByCat(respone.data.value);
    }
    
    return (
        <div className='main-cont'>
            <div className='btn-cont'>
                <button type='submit' onClick={(e) => GetData(e)} >
                    Get Random Joke
                </button>
            </div>
            <div className='joke-cont'>
                {joke}
            </div>
            <div className='category-cont'>
                <div className='joke-cont'>
                    {jokeByCat}
                </div>
                <select onChange={(e) => OnSelected(e)}>
                 { categories.map(cat => (<option key={cat}> {cat}</option>)) }
                </select>
            </div>
        </div>
    );
}

export default ChuckNorris;

/* App.js
import React from 'react';

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