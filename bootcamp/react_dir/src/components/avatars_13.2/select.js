import React from 'react';
import './select.css';

class SelectBox extends React.Component {


    render() {
        return (
            <select className='select' onChange={this.props.handleSelect}>
                {
                    this.props.keys.map(ele => <option key={ele} >{ele}</option> )
                }
                
            </select>
        );
    }
}

export default SelectBox;