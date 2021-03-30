import React from 'react';
import GetData from './get_data';


const Countries = () => {

    const [data, setData] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

    React.useEffect(() => {
        (async () => {
            let countriesArr = await GetData();
            setData(countriesArr);
        })();

    }, []);

    const DisplayData = (someData) => {
        return (
            <React.Fragment>
                <input type='text' onChange={(e) => { setSearchTerm(e.target.value) }} placeholder='search' />
                <ul>
                    {someData.filter(element => {
                        if (searchTerm == '') {
                            return element;
                        }
                        else if (element.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return element;
                        }
                    }).map((obj) => {
                        return <li key={obj.name}>{obj.name}</li>
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

export default Countries;

/* App.js
import React from 'react';
import Countries from './components/countries_of_the_world_19.2/countries_of_the_world_19.2';


const App = () => {

    return (
        <React.Fragment>
            <Countries />
        </React.Fragment>
    );
}

export default App;
*/
