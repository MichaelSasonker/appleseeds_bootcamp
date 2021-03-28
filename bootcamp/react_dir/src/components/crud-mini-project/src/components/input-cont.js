import React from 'react';
import Api from './api';

class InputCont extends React.Component {

    state= {
        name: null,
        imgURL: null,
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value });
    }

    handleChangeUrl = (e) => {
        this.setState({ imgURL: e.target.value });

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if ((this.state.name.length > 4) && (this.state.imgURL.includes('.jpg'))) {
            let avatar = {
                name: this.state.name,
                img: this.state.imgURL,
            }
            await Api.post('', avatar);
            this.props.isUpdate(true);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Add Name:</label>
                <br/>
                <input type='text' id='name' onChange={this.handleChangeName} />
                <br/>
                <label htmlFor='img'>Add url img:</label>
                <br/>
                <input type='text' id='img' onChange={this.handleChangeUrl} />
                <br/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default InputCont;