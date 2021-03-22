import React from 'react';

class TextArea extends React.Component {

    constructor(props) {
        super(props);

        this.state = { value: '' };
        this.textRef = React.createRef();
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
        this.props.handleChange(this.state.value);
    }

    render() {
        return (
            <div>
              <label htmlFor='textarea'>Please write something</label>
              <br/><br/>
              <textarea 
                name='textarea' 
                rows='10' 
                cols='25' 
                placeholder='some text...'
                value={this.state.value}
                onChange={this.handleChange}
                ></textarea>
            </div>
        );
    }
}

export default TextArea;