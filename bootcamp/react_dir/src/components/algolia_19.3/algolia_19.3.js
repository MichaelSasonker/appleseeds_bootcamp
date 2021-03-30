import React from 'react';
import GetData from './get_data';

const BASE_URL = `https://hn.algolia.com/api/v1/search?query=`;

const Algolia = () => {

    const [query, setQuery] = React.useState('hooks');
    const [data, SetData] = React.useState([]);
    const [input, setInput] = React.useState('');
    const [spinner, setSpinner] = React.useState(true);

    React.useEffect(() => { 

        const PullData = async () => {
            try {
                let respone = await GetData(BASE_URL + query);
                if (respone) {
                    setSpinner(false);
                }
                SetData(respone.hits);
            }
            catch (err) {
                alert(err.message);
            }
        }

        PullData();

    }, [query]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setSpinner(true);
        setQuery(input);
    }

    const DisplayData = (someData) => {
        return (
            <React.Fragment>
                <input type='text' onChange={(e) => handleChange(e)} placeholder='Enter query'/>
                <input type='button' onClick={(e) => handleClick(e)} value='Search' />
                {spinner ? <div>loading...</div> : ''}
                <ul>
                    {someData.map(obj => {
                        return (
                            <li key={obj.created_at_i}>
                                <a href={obj.url} >
                                    {obj.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>                
            </React.Fragment>
        );
    }

    return (
        <div>
            {DisplayData(data)}
        </div>
    );

}

export default Algolia;

/* App.js
import React from 'react';
import Algolia from './components/algolia_19.3/algolia_19.3';

const App = () => {

    return (
        <React.Fragment>
            <Algolia />
        </React.Fragment>
    );
}

export default App;
*/