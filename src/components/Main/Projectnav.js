import React, { Component } from "react";
import Projectcard from "./Projectcard";
import Button from '../Utils/Button'

class Projectnav extends Component {
    constructor(props) {
        super()
    }
    //for each project render a project
    render() {
        return (
            <div className="projectNav" >
                <h2>Projects</h2>
                <Button text='add project' buttonFunction='' />
                <Projectcard />
                <Projectcard />
                <Projectcard />
            </div>
        )

    }
}
export default Projectnav