import React from 'react';
import './name.css';

class Name extends React.Component {


    render() {
        return (
            <div className='names-cont'>
                <strong>Names:</strong>
                <br/>
                {this.props.namesArr.map(name => <div key={name} className='name'>{name}</div>)}
            </div>
        );
    }
}

export default Name;