import React from "react";
import Button from "../Utils/Button";

function Date(props) {
    // console.log(props)
    return (
        <div className="date" onClick={() => props.handleClick(props.day)}>
            <span>
                <h2>{props.day || 'no data: props.day'}</h2>
                <Button text='x' />
            </span>
        </div>
    )
}

export default Date

