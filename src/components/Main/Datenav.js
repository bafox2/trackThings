import React, { Component } from "react";
import Date from "./Date";
import Button from '../Utils/Button'

class Datenav extends Component {
    constructor(props) {
        super()
    }
    //for each project render a project
    render() {
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
}
export default Datenav