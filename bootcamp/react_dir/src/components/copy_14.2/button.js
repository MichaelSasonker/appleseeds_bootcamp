import React from 'react';

class Button extends React.Component {

    constructor(props) {
        super(props);

        this.buttonRef = React.createRef();
    }

    ClickHandler = (e) => {
        let bool =  this.buttonRef.current.value.length > 0;

        if (bool) {
            this.buttonRef.current.select();
            document.execCommand('copy');
        }
    }

    render() {
        return (
            <div>
                <button type='submit' onClick={this.ClickHandler} ref={this.buttonRef} >
                    Select & Copy
                </button>
            </div>
        );
    }
}

export default Button;