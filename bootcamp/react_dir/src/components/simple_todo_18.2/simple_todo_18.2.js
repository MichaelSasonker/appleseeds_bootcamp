import React from 'react';

const DATA = [
    { 
        name: "CSS",
        completed: true
    },
    { 
        name: "JavaScript",
        completed: true 
    },
    { 
        name: "Learn React", 
        completed: false 
    },
    { 
        name: "Learn mongoDB", 
        completed: false 
    },
    { 
        name: "Learn Node JS", 
        completed: false 
    },
];


const ToDo = () => {

    const [data, setData] = React.useState(DATA);

    const handleClick = (e, index) => {
        let res = data.map((object, i) => {
            if (i == index) {
                object.completed = !object.completed;
            }
            return object;
        });
        setData(res);
    }

    const CheckIsCompleted = () => {
        return data.map((obj, index) => {
            if (obj.completed) {
                return (
                    <div key={obj.name}>
                        <del>{obj.name}</del>  
                        <button type='submit' onClick={(e) => handleClick(e, index)} 
                            style={{ backgroundColor: 'transparent', border: 'none'}}>
                            <i className="fas fa-check"></i>
                        </button> 
                    </div> 
                );
            }
            else {
                return (
                    <div key={obj.name}>
                        {obj.name}  
                        <button type='submit' onClick={(e) => handleClick(e, index)}
                            style={{ backgroundColor: 'transparent', border: 'none'}}>
                            <i className="fas fa-times"></i>
                        </button> 
                    </div> 
                );
            }
        })
    }

    const DisplayData = () => {
        return CheckIsCompleted();
    }


    return (
        <div>
            {DisplayData()}
        </div>
    );
}

export default ToDo;

/* App.js
import React from 'react';
import ToDo from './components/simple_todo_18.2/simple_todo_18.2';

const App = () => {

    return (
        <div>
            <ToDo />
        </div>
    );
}

export default App;
*/