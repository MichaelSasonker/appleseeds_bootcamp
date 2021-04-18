import react from 'react';
import axios from 'axios';
import React from 'react';


const BaseURL = 'http://localhost:8003/api/bank';

const ParComp = () => {

    const [data, setData] = react.useState([]);

    react.useEffect(() => {
        const GetData = async (url) => {
            let { data } = await axios.get(url);
            console.log(data.users);
            setData(data.users);
        }

        GetData(BaseURL);
    }, []);

    return (
        <div>
            {console.log(data)}
            {data.map((obj, index) => {
                return (
                    <React.Fragment key={obj.passportId}>
                        [<br/>
                            &nbsp;&nbsp;User: {index} <br/>
                            &nbsp;&nbsp;Passport ID: {obj.passportId} <br/>
                            &nbsp;&nbsp;Cash: {obj.cash} <br/>
                            &nbsp;&nbsp;Credit: {obj.credit} <br/>
                            &nbsp;&nbsp;Is Active: {obj.isActive} <br/>
                        ]<br/>
                    </React.Fragment>
                );
            })}
        </div>
    );

}

export default ParComp;