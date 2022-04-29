import React, { Component } from 'react';
//type, name, placeholder, onChange, value
class Input extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
        };

        this.countUp = this.countUp.bind(this);
    }


    render() {
        return (
            <button onClick={this.countUp}>Click Me!</button>
        );
    }
}
export default Input