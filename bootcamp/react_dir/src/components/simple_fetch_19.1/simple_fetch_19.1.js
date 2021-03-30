import React from 'react';
import Axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/films/1/';

const SimpleFetch = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const GetData = async (url) => {
            let respone = await Axios.get(url);
            setData(respone.data);
        }

        GetData(BASE_URL);
    }, []);

    const DisplayData = (responeData) => {
        return (
            <React.Fragment key={responeData.title}>
                Title: {responeData.title}, Director: {responeData.director}
            </React.Fragment>
        );
    }

    return (
        <div>
            {DisplayData(data)}
        </div>
    );
}

export default SimpleFetch;

/* App.js
import React from 'react';
import SimpleFetch from './components/simple_fetch_19.1/simple_fetch_19.1';


const App = () => {

    return (
        <React.Fragment>
            <SimpleFetch />
        </React.Fragment>
    );
}

export default App;
*/