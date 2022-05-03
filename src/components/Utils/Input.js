import React from 'react';
//type, name, placeholder, onChange, value
function Input(props) {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={props.name}
            options={props.options}
            value={props.value}
        />
    );
}

export default Input