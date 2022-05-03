import React from "react";
import Button from "../Utils/Button";

function Date(props) {



    return (
        <div className="date" >
            <span>
                <h2>{props.date || '02/02/2000'}</h2>
                <Button text='x' />
            </span>
        </div>
    )
}

export default Date

