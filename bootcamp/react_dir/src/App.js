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
