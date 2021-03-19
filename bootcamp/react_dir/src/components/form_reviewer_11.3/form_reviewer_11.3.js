import React from 'react';
import FormButton from './form_button';


export default class FormReview extends React.Component {
    // state = { 
    //     firstName: "",
    //     lastName: "", 
    //     select: "", 
    //     freeText: "" ,
    // };
    state = { 
        firstName: this.props.newData.firstName,
        lastName: this.props.newData.lastName, 
        select: this.props.newData.select, 
        freeText: this.props.newData.freeText,
    };

    ChangeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    //   console.log(this.state);
    //   localStorage.setItem("state", JSON.stringify(this.state));
    };
  
    // componentDidMount() {
    //   this.setState(JSON.parse(localStorage.getItem("state")), () => console.log(localStorage));
    // }
  
    render() {
        console.log(this.props.newData)
        return (
            <div>
                <h1>Review:</h1>
                <div>First Name: {this.state.firstName}</div>
                <div>Last Name: {this.state.lastName}</div>
                <div>Age: {this.state.select}</div>
                <div>Free Text: {this.state.freeText}</div>
                <FormButton name="cancel" handleClick={this.props.handleCancel} />
                <FormButton name="submit" handleClick={this.props.handleSubmit} />
            </div>
        );
    }
}

