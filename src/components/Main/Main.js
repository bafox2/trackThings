import React from "react";
import Projectnav from "./Projectnav";
import Datenav from "./Datenav";
import Categorynav from "./Categorynav";
import { defaultProjects } from "./defaultprojects";

function Main(props) {
    //maybe I should merge all the different states into one global type state?
    //need to set a variable that will calculate what project was clicked on and then pass that information to the Datenav and 
    let currentProject = 'thing clicked on'
    const [projects, setProjects] = React.useState(defaultProjects)

    const [newProject, setNewProject] = React.useState({
        project: "",
        purpose: ""
    })
    const [newDate, setNewDate] = React.useState({
        // date: `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDay()}`
    })

    //can merge these with sometype of if?
    const handleChangeNewProj = (event) => {
        const { name, value, type, checked } = event.target
        setNewProject(prevNewCategory => {
            return {
                ...prevNewCategory,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    const handleChangeNewDate = (event) => {
        const { name, value, type, checked } = event.target
        setNewDate((prevDate) => {
            return {
                ...prevDate,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function onProjectAdd(e) {
        e.preventDefault()

        //add a project to state, based off the inputs
        setProjects(
            [
                {
                    project: newProject.project,
                    purpose: newProject.purpose,
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
        setNewProject({
            project: "",
            purpose: ""
        })
    }
    //finding functions
    // function findProject(projname) {
    //     return defaultProjects.find(a => a.project === projname)
    //     //return the object with the project with the same name?
    // }

    // function findDateEntryInProject(proj, date) {
    //     return proj.entries.find(entry => entry.date === date)
    // }

    // function findCategoryInDateInProject(date, category) {
    //     return date.categories.find(a => a.title === category)
    // }
    //examples
    // const foundProject = findProject('basketball')
    // const foundDate = findDateEntryInProject(foundProject, '5/1/2022')
    // const foundCategory = findCategoryInDateInProject(foundDate, 'warmup game')

    function handleProjectClick(project) {
        const specificProject = projects.find(proj => (proj.project === project));
        console.log(specificProject)
        return <Datenav onSubmit={() => onDateAdd} projectData={specificProject || projects} /> || console.log('did not find project whoopps')
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
            <Projectnav projectData={projects} onSubmit={() => onProjectAdd} handleProjectClick={handleProjectClick} handleChange={handleChangeNewProj} state={newProject} project={'health'} />
            <Datenav onSubmit={() => onDateAdd} projectData={projects} handleChange={handleChangeNewDate} state={newProject} project={'health'} />
            <Categorynav onSubmit={() => onCategoryAdd} projectData={projects} />
        </main>
    )

}

export default Main