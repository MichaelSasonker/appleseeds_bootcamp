import React from "react";
import FormInput from "./form_input";
import FormSelect from "./form_select";
import FormTextarea from "./form_textarea";
import FormButton from "./form_button";


export default class Form extends React.Component {
    state = { 
        firstName: "",
        lastName: "", 
        select: "", 
        freeText: "" 
    };

    ChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(this.state);
    };

    // componentDidMount() {
    //     this.setState(JSON.parse(localStorage.getItem("state")), () => console.log(localStorage));
    // }

    // componentWillUnmount() {
    //     // console.log(JSON.parse(localStorage.getItem("state")));
    //     localStorage.setItem("state", JSON.stringify(this.state));
    // }

    render() {
        return (
            <>
                <h1>Form:</h1>
                <form onSubmit={(e) => this.props.onContinue(e, this.state)}>
                    <FormInput name="firstName" label="First Name: " onChange={this.ChangeHandler} value={this.state.firstName} />
                    <FormInput name="lastName" label="Last Name: " onChange={this.ChangeHandler} value={this.state.lastName} />
                    <FormSelect
                        name="select"
                        options={["under 13", "13-18", "over 18"]}
                        label="Age: "
                        onChange={this.ChangeHandler}
                        value={this.state.select}
                    />
                    <FormTextarea name="freeText" label="Free Text: " onChange={this.ChangeHandler} value={this.state.freeText} />
                    <FormButton name="continue" handleClick={(e) => this.props.onContinue(e, this.state)} />
                </form>
            </>
        );
    }
}