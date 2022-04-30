import React from 'react';
//text, onClick
function Button(props) {
    return (
        <button onClick={props.buttonFunction}>{props.text}</button>
    );
}

export default Button