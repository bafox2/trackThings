import React from "react";
import Projectcard from "./Projectcard";
import Button from '../Utils/Button'

function Projectnav(props) {
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

export default Projectnav