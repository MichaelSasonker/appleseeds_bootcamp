import React from 'react';
import Api from './api';
import Avatar from './avatar';
import InputCont from './input-cont';

import './CRUD.css';

class CRUD extends React.Component {

    state = {
        data: [],
        isUpdate: false,
    }

    async componentDidMount() {
        let respone = await Api.get();
        this.setState({ data: respone.data });
    }

    handleUpdate = async (bool) => {
        if (bool) {
            let respone = await Api.get();
            this.setState({ data: respone.data });
        }
    }

    render() {
        console.log(this.state.data)
        return (
            <div className='main-cont'>
                <div className='input-cont'>
                    <InputCont  isUpdate={this.handleUpdate}/>
                </div>
                <div className='avatars-cont'>
                    {this.state.data.map(obj => <Avatar dataObj={obj} key={obj.id} isUpdate={this.handleUpdate} />)}
                </div>
            </div>
        );
    }
}

export default CRUD;
