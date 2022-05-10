import React from "react";
import Projectcard from "./Projectcard";
import Button from '../Utils/Button'


function Projectnav(props) {

    const projectsToRender = props.projectData.map(proj => <Projectcard handleClick={props.handleClick} project={proj.project} />)

    return (
        <div className="projectNav">
            <h2>Projects</h2>
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