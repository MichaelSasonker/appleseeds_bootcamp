import React from 'react';
import './search.css';

class SearchBox extends React.Component {

    state = {
        value: '',
    }

    // HandleChange = (e) => {
    //     this.setState({ value: e.target.value });
    // }

    render() {
        return (
            <input type='text' className='search' onChange={this.props.handleChange}/>
        );
    }
}

export default SearchBox;