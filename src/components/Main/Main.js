import React from "react";
import Projectnav from "./Projectnav";
import Datenav from "./Datenav";
import Categorynav from "./Categorynav";
import { defaultProjects } from "./defaultprojects";

function Main(props) {
    const [projectList, setProjectList] = React.useState(defaultProjects)
    const [currentProject, setCurrentProject] = React.useState()
    const [currentDate, setCurrentDate] = React.useState()

    const [newProject, setNewProject] = React.useState({
        project: "",
        purpose: ""
    })
    const [newDate, setNewDate] = React.useState({
        date: '',
        categories: ''
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

    function onDateAdd(e) {
        e.preventDefault()

        //add a project to state, based off the inputs
        setCurrentProject(
            {
                ...currentProject,
                entries: [
                    ...currentProject.entries,

                    {
                        date: currentDate,
                        categories: ['categories will be added', 'i promise']

                    }]
            }
        );

        //clear the inputs themselves
        setNewDate({
            date: ""
        })
    }

    function onProjectAdd(e) {
        e.preventDefault()
        //add a project to state, based off the inputs
        setProjectList(
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
                ...projectList
            ]);

        //clear the inputs themselves
        setNewProject({
            project: "",
            purpose: ""
        })
    }

    function handleProjectClick(project) {
        const foundProject = projectList.find(proj => (proj.project === project));
        setCurrentProject(foundProject)
        setCurrentDate()
    }
    function handleDateClick(date) {

        const foundEntry = currentProject.entries.find(a => a.date === date)
        console.log(foundEntry)
        setCurrentDate(foundEntry)
    }


    function onCategoryAdd(e) {
        e.preventDefault()
        console.log('working:)')
    }

    return (
        <main className="content" >
            <Projectnav projectData={projectList} onSubmit={() => onProjectAdd} handleClick={handleProjectClick} handleChange={handleChangeNewProj} state={newProject} />
            <Datenav onSubmit={() => onDateAdd} projectData={currentProject} handleClick={handleDateClick} handleChange={handleChangeNewDate} state={newDate} />
            <Categorynav onSubmit={() => onCategoryAdd} projectData={currentDate} />
        </main>
    )

}

export default Main