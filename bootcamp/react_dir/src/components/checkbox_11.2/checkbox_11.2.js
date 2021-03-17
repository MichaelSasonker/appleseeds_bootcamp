import React from 'react'; 

class Checkbox extends React.Component {

    state = { 
        value: this.props.value,
        checked: this.props.checked,
    }

    render() {
        console.log(this.state.value);
        return (
            <>
                <input type='checkbox' checked={this.state.checked} />
                <label>{this.state.value}</label>
                <br/>
            </>    
        );
    }
}


export default Checkbox;