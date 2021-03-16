import React from 'react';
import './spinner_9.1.css';

class Spinner extends React.Component {
    state = { isShown: false } ;

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isShown: true });
        }, 2000)
    }

    render() {
        const spinner = <div className='spin-a'></div>;
        const content = <div></div>;
        return (
            this.state.isShown ? content : spinner
        );
    }

}

export default Spinner;