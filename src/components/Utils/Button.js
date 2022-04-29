import React, { Component } from 'react';
//text, onClick
class Button extends Component {
    constructor(props) {
        super(props);
        // this.buttonFunction = this.{ this.props.buttonFunction }.bind(this);      //this goes on the next thing
    }


    render() {
        return (
            <button onClick={this.props.buttonFunction}>{this.props.text}</button>
        );
    }
}
export default Button