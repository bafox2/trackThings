import React from "react";
import Projectcard from "./Projectcard";
import Button from '../Utils/Button'

//might need to make a loop that does a project card for each project, 

function Projectnav(props) {
    // console.log(props)
    console.log(props.handleClick)

    const projectsToRender = props.projectData.map(proj => <Projectcard handleClick={props.handleProjectClick} project={proj.project} />)

    return (
        <div className="projectNav">
            <h2>Projects</h2>
            {/* <Button text='+' buttonFunction='' /> */}
            {/* need this to do the animations for the add project UI peice at some point */}
            <div className="projectScroller" >
                {projectsToRender}

            </div>
            <form>
                <input
                    type='input'
                    placeholder='new project title'
                    onChange={props.handleChange}
                    name='project'
                    value={props.state.project}
                />
                <input
                    type='input'
                    placeholder='new project purpose'
                    onChange={props.handleChange}
                    name='purpose'
                    value={props.state.purpose}
                />
                <Button text="add project" buttonFunction={props.onSubmit()} />
            </form>

        </div>
    )

}

export default Projectnav
//add project has the title and the reason