import React from 'react';
import './image_avatar.css';

class ImageAvatar extends React.Component {
    state = { 
        imageURL: this.props.imageURL,
    }

    componentDidMount() {
        this.setState({ imageURL: this.props.imageURL})
    }

    render() {
        return (
            <img className='image' src={this.props.imageURL} ></img>
        );
    }
}

export default ImageAvatar;