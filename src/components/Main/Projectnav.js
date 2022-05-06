import React from "react";
import Projectcard from "./Projectcard";
import Button from '../Utils/Button'

//might need to make a loop that does a project card for each project, 

function Projectnav(props) {
    const [newProject, setNewProject] = React.useState({
        project: "",
        purpose: ""
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setNewProject(prevNewCategory => {
            return {
                ...prevNewCategory,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    // console.log(props)
    // console.log(props.projectData)

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
                    onChange={handleChange}
                    name='project'
                    value={newProject.project}
                />
                <input
                    type='input'
                    placeholder='new project purpose'
                    onChange={handleChange}
                    name='purpose'
                    value={newProject.purpose}
                />
                <Button text="add project" buttonFunction={props.onSubmit()} />
            </form>

        </div>
    )

}

export default Projectnav
//add project has the title and the reason