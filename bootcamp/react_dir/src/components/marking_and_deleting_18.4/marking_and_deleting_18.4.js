import React from 'react';

const ARR = ["one", "two", "three", "four", "five"];
const ARR_STATUS = [{
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
}];

const CheckList = () => {

    const [arrObj, setArrObj] = React.useState(ARR_STATUS);
    const [dataArr, setDataArr] = React.useState(ARR);

    const handleClick = (e) => {
        // e.preventDefault();
        // let orgDataArr = dataArr;
        let keysArr = [];

        if (e.target.name === 'delete') {
            for (const [key, value] of Object.entries(arrObj[0])) {
                if (value === false) {
                    keysArr.push(key);
                }
            }

            let resArr = keysArr.map(key => {
                key = parseInt(key);
                return (dataArr[key])    
            });
            console.log(resArr);
            setArrObj(ARR_STATUS);
            setDataArr(resArr);

        }
        else if (e.target.name === 'reset') {
            setArrObj(ARR_STATUS);
            setDataArr(ARR);
        }
    }

    const handleChange = (e, index) => {
        let arrObjCopy = arrObj;
        arrObjCopy[0][index] = !arrObjCopy[0][index];
        setArrObj([...arrObjCopy]);
    }

    const DisplayData = () => {
        return (
            <React.Fragment>
                <div>
                    <button type='submit' name='delete' onClick={(e) => handleClick(e)} >
                        Delete
                    </button>
                    <button type='submit' name='reset' onClick={(e) => handleClick(e)}>
                        Reset
                    </button>
                </div>
                {
                    dataArr.map((element, index) => {
                        return (
                            <React.Fragment key={element}>
                                <li key={element}>
                                    <input 
                                        type='checkbox' 
                                        name={element} 
                                        checked={arrObj[0][index]} 
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                    <label key={element} htmlFor={element}>{element}</label>
                                </li>
                            </React.Fragment>
                        );
                    })
                }
            </React.Fragment>
        );
    }

    return (
        <div>
            {DisplayData()}
        </div>
    );
}

export default CheckList;

/* App.js
import React from 'react';
import CheckList from './components/marking_and_deleting_18.4/marking_and_deleting_18.4';

const App = () => {

    return (
        <React.Fragment>
            <CheckList />
        </React.Fragment>
    );
}

export default App;
*/