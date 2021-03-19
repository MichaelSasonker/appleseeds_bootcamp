import React from 'react';

export default class FormButton extends React.Component {
    state = {};

    render() {
        return (
            <button type="submit" onClick={this.props.handleClick}>
                {this.props.name}
            </button>
        );
    }
}