import React from 'react';
import Api from './api';

class Avatar extends React.Component {

    state = {
        id: null,
        createdAt: null,
        name: null,
        img: null,
        job: null,
        country: null,
    };

    componentDidMount() {
        this.setState({ 
            id: this.props.dataObj.id,
            createdAt: this.props.dataObj.createdAt,
            name: this.props.dataObj.name,
            img: this.props.dataObj.img,
            job: this.props.dataObj.job,
            country: this.props.dataObj.country,
        });
    }

    handleDelete = async (e) => {
        await Api.delete(`/${e.target.parentElement.id}`);
        this.props.isUpdate(true);
    }

    /* TODO: check how to update!!
     * maybe when update button is pressed create two inputs and two new buttons!
     * maybe use the upper inputs */   
    handleUpdate = async (e) => {
        e.preventDefault();
        console.log(e.target.parentElement.children[0])
        await Api.put(`/${e.target.parentElement.id}`, 'hello');
        this.props.isUpdate(true);
    }

    DisplayData = () => {
        if (this.state.id != null) {
            return (
                <div className={`card-cont`} id={this.state.id} key={this.state.id}>
                    <div className='name'>
                        {this.state.name}
                    </div>
                    <img 
                        src={this.state.img}
                        alt={this.state.id} 
                        height='150px'
                        width='100px'  
                    />
                    <div className='job'>
                        {this.state.job}
                    </div>
                    <div className='country'>
                        {this.state.country}
                    </div>
                    <button type='submit' onClick={this.handleDelete}>Delete</button>
                    <button type='submit' onClick={this.handleUpdate}>Update</button>
                </div>
            );
        };
    }

    render() {
        return (
            <>
                {this.DisplayData()}
            </>
        );
    }
}

export default Avatar;