import React from 'react';

const Edit = () => {

    const [display, setDisplay] = React.useState(false);
    const [text, setText] = React.useState('');
    const ref = React.useRef(null);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    React.useEffect(() => {
        if (display) {
            ref.current.focus();
        }
    }, [display])
        
    return (
        <div>
            {
                display 
                ? (
                    <React.Fragment>
                        <input type='button' value='Close' onClick={(e) => setDisplay(!display)} />
                        <input ref={ref} type='text' value={text} onChange={(e) => handleChange(e)} />
                    </React.Fragment>
                )
                : (
                    <React.Fragment>
                        <input type='button' value='Edit' onClick={(e) => setDisplay(!display)} />
                    </React.Fragment>
                )
            }
        </div>
    );

}

export default Edit;

/* App.js
import React from 'react';
import Edit from './components/edit_21.1/edit_21.1';


const App = () => {

    return (
        <React.Fragment>
            <Edit />
        </React.Fragment>
    );
}

export default App;
*/