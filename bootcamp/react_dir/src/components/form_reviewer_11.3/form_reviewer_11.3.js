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

/* App.js
import React from 'react';
import FormReview from './components/form_reviewer_11.3/form_reviewer_11.3';
import Form from './components/form_reviewer_11.3/form_form_11.3';
import './components/form_reviewer_11.3/form_reviewer_11.3.css';

class App extends React.Component {
    state = { 
      isShowen: true 
    };

    ContinueHandler = (e, stateObj) => {
        console.log(stateObj)
        e.preventDefault();
        this.setState({ isShowen: false });
    };

    CancelHandler = (e) => {
        e.preventDefault();
        this.setState({ isShowen: true });
    };

    SubmitHandler = (e) => {
        alert("submitted");
    };

    render() {
        return (
          (this.state.isShowen) 
          ? <Form onContinue={this.ContinueHandler} />
          : <FormReview handleCancel={this.CancelHandler} handleSubmit={this.SubmitHandler} />
        );
    }
}

export default App;

*/