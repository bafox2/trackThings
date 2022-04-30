import React from "react";
import Date from "./Date";
import Input from "../Utils/Input";

function Datenav(props) {
    return (
        <div className="dateNav" >
            <h2>Date Laist</h2>
            <Input type='date' />
            <Date />
            <Date />
            <Date />
        </div>
    )
}
export default Datenav