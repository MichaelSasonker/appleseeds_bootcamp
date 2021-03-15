import React from 'react';
import './class_components_6.1.css';

class Card extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className='main-cont'>
                <img src={this.props.srcImg}/>
                <h2>{this.props.textTitle}</h2>
                <p>{this.props.textTitle}</p>
                <div className='links-cont'>
                    <a href='#'>{this.props.textLink}</a>
                    <a href='#'>{this.props.textLink}</a>
                </div> 
            </div>
        );
    }
}

export default Card;