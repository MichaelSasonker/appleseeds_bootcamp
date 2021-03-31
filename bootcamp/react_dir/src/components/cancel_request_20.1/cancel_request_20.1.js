import React from 'react';
import GetData from './get_data';

const BASE_URL = 'https://api.chucknorris.io/jokes/random';

const CancelRquest = () => {

    const [data, setData] = React.useState('');
    const [toggle, setToggle] = React.useState(false);

    React.useEffect(() => {
        const PullData = async () => {
            let respone = await GetData(BASE_URL);
            setData(respone.value);
        }

        PullData();

    }, [toggle]);

    const handleClick = (e) => {
        setToggle(!toggle);
    }

    const DisplayData = (someData) => {

        return (
            <React.Fragment>
                {
                    toggle 
                    ? (<div>
                        <input type='button' value='Hide' onClick={(e) => handleClick(e)} />
                        <br/>
                        {someData}
                    </div>) 
                    : <input type='button' value='Show' onClick={(e) => handleClick(e)} />  
                }
                
            </React.Fragment>
        );
    }

    return (
        <div>
            {DisplayData(data)}
        </div>
    );
}

export default CancelRquest;

/* App.js
import React from 'react';
import CancelRquest from './components/cancel_request_20.1/cancel_request_20.1';


const App = () => {

    return (
        <React.Fragment>
            <CancelRquest />
        </React.Fragment>
    );
}

export default App;
*/