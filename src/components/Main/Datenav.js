import React from "react";
import Date from "./Date";
import Button from '../Utils/Button'

function Datenav(props) {
    return (
        <div className="dateNav" >
            <h2>Date List</h2>
            <Button text='add date' buttonFunction='' />
            <Date />
            <Date />
            <Date />
        </div>
    )
}
export default Datenav