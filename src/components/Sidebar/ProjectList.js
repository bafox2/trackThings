import React from "react";

const ProjectList = (props) => {
    const { projects } = props
    //if the projectImput is blank, show the input to add a project
    //if imput has a value, add a project to the list of projects
    //if  clicked away, rehide the thing



    return (

        <ul>
            {projects.map((project) => {
                return <li key={project.id}>{project.title}</li>;
            })}
        </ul>
    )
}

export default ProjectList