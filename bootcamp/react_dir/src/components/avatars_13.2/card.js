import React from 'react';
import  ImageAvatar from './image_avatar';
import './card.css';


class Card extends React.Component {
    state = {
        gender: '',
        firstName: '',
        lastName: '',
        pictureURL: '',
    }

    componentDidMount() {
        this.setState({
            gender: this.props.obj.gender,
            firstName: this.props.obj.firstName,
            lastName: this.props.obj.lastName,
            pictureURL: this.props.obj.pictureURL,
        });
    }

    render() {
        // console.log(this.props.obj)
        // console.log(this.state)
        return (
            <div className='card-cont'>
                <div className='details'>
                    {this.props.obj.firstName} {this.props.obj.lastName}
                </div>
                <ImageAvatar imageURL={this.state.pictureURL} />
            </div>
        );
    }
}

export default Card;