import React from 'react';

const Time = () => {
    const [time, setTime] = React.useState([{
        seconds: 0,
        minutes: 0,
        hours: 0,
    }]);

    const handleChange = (e) =>{
        let switcher = e.target.name;
        let val = e.target.value;

        switch (switcher) {
            case 'seconds':
                setTime([{
                    seconds: val,
                    minutes: val / 60,
                    hours: val / 3600,
                }]);
                return;
            case 'minutes':
                setTime([{
                    seconds: val * 60,
                    minutes: val,
                    hours: val / 60,
                }]);
                return;
            case 'hours':
                setTime([{
                    seconds: val * 3600,
                    minutes: val * 60,
                    hours: val,
                }]);
                return;
            default:
                setTime(time);
        }

    }

    const DisplayData = () => {
        return (
            <React.Fragment>
                <label htmlFor='seconds'>Seconds:</label><br/>
                <input type='number' name='seconds' value={time[0].seconds} onChange={(e) => handleChange(e)}/>
                <br/><br/>
                <label htmlFor='minutes'>Minutes:</label><br/>
                <input type='number' name='minutes' value={time[0].minutes} onChange={(e) => handleChange(e)}/>
                <br/><br/>
                <label htmlFor='hours'>Hours:</label><br/>
                <input type='number' name='hours' value={time[0].hours} onChange={(e) => handleChange(e)}/>
            </React.Fragment>
        )
    }

    return (
        <div>
            {DisplayData()}
        </div>
    );
}

export default Time;

/* App.js
import React from 'react';
import Time from './components/whats_the_time_18.3/whats_the_time_18.3';

const App = () => {

    return (
        <div>
            <Time />
        </div>
    );
}

export default App;
*/