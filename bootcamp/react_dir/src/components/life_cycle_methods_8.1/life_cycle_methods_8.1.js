import React from 'react';

class LifeCycle extends React.Component {
    state = {
        favoriteColor: "blue",
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'green' });
        }, 1000)
    }

    componentDidUpdate() {
        const newDiv = document.querySelector('#new-div');
        newDiv.style.color = this.state.favoriteColor;
        newDiv.textContent = `The update favorite color is: ${this.state.favoriteColor}`
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.favoriteColor }}>
                    My favorite color is blue
                </h1>
                <div id='new-div'></div>
            </div>
        );
    };

}

export default LifeCycle;