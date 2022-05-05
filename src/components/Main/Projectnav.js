import React from "react";
import Projectcard from "./Projectcard";
import Button from '../Utils/Button'

//might need to make a loop that does a project card for each project, 

function Projectnav(props) {
    // const projects = props.map((project) => <Projectcard title={project.title } /> )

    return (
        <div className="projectNav">
            <h2>Projects</h2>
            <Button text='+' buttonFunction='' />
            <div className="projectScroller" >
                <Projectcard />
                <Projectcard />
                <Projectcard />
            </div>
            <form>
                <input placeholder="Project title" />
                <input placeholder="Reason for tracking" />
                <Button text="add project" />
            </form>
        </div>
    )

}

export default Projectnav
//add project has the title and the reason