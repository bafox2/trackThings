import React from "react";
import Projectnav from "./Projectnav";
import Datenav from "./Datenav";
import Categorynav from "./Categorynav";
import { defaultProjects } from "./defaultprojects";

function Main(props) {
    const [projects, setProjects] = React.useState(defaultProjects)

    const blankProject = {
        title: '',
        purpose: '',
        picture: '',
        defaults: [
            {
                title: "",
                description: "",
                type: '',
                entry: ''
            }
        ],
        entries: [
            {
                date: '',
                categories: [
                    {
                        title: "",
                        description: "",
                        type: '',
                        entry: ''
                    }]
            },
        ]
    }
    function onProjectAdd(e) {
        e.preventDefault()

        //add a project to state, based off the inputs
        setProjects(
            [
                {
                    // HEEEEEEEEEELP HERE 5/5 6:42
                    project: 'newProject.value',
                    purpose: 'newProject.value',
                    picture: '',
                    defaults: [
                        {
                            title: "",
                            description: "",
                            type: '',
                            entry: ''
                        }
                    ],
                    entries: [
                        {
                            date: '',
                            categories: [
                                {
                                    title: "",
                                    description: "",
                                    type: '',
                                    entry: ''
                                }]
                        },
                    ]
                },
                ...projects
            ]);
        //clear the inputs themselves
        //HEEEEEEEEEEEEEEEELP how would i clear the inputs of the cild after i update the projects list
        // setNewProject({
        //     newProject.project = ''
        //     newProject.purpose = ''
        // })
    }

    function handleProjectClick(project) {
        const specificProject = projects.find(proj => (proj.project === project));
        console.log(specificProject)

        return specificProject || console.log('did not find project whoopps')
    }

    function onDateAdd(e) {
        e.preventDefault()
        console.log('working:)')
    }

    function onCategoryAdd(e) {
        e.preventDefault()
        console.log('working:)')
    }


    return (
        <main className="content" >
            <Projectnav projectData={projects} onSubmit={() => onProjectAdd} handleProjectClick={handleProjectClick} />
            <Datenav onSubmit={() => onDateAdd} projectData={projects} />
            <Categorynav onSubmit={() => onCategoryAdd} projectData={projects} />
        </main>
    )

}

export default Main