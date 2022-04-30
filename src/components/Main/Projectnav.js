import React from "react";
import Projectcard from "./Projectcard";
import Button from '../Utils/Button'

function Projectnav(props) {
    return (
        <div>
            <h2>Projects</h2>
            <div className="projectNav" >
                <Button text='add project' buttonFunction='' />
                <Projectcard />
                <Projectcard />
                <Projectcard />
            </div>
        </div>
    )

}

export default Projectnav
//add project has the title and the reason