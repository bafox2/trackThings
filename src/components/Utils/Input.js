import React from 'react';
//type, name, placeholder, onChange, value
function Input(props) {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={props.name}
            value={props.value}
            options={props.options}
        />
    );
}

export default Input