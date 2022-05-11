import React from "react";
import Projectnav from "./Projectnav";
import Datenav from "./Datenav";
import Categorynav from "./Categorynav";
// import { defaultProjects } from "./defaultprojects";

function Main(props) {
    const [projectList, setProjectList] = React.useState([])
    const [currentProject, setCurrentProject] = React.useState()
    const [currentDate, setCurrentDate] = React.useState()

    const [newProject, setNewProject] = React.useState({
        project: "",
        purpose: ""
    })
    const [newDate, setNewDate] = React.useState({
        day: '',
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

    function onDateAdd(projectObj) {
        //add a project to state, based off the inputs
        setCurrentProject(
            {
                ...currentProject,
                entries: [
                    ...currentProject.entries,

                    {
                        //could reformat this
                        day: newDate.day,
                        categoryEntries: 'currentProject.defaults'

                    }]
            }
        );
        console.log(projectObj)
        console.log(currentProject)

        setProjectList(
            //now replace the entry without the date to the new updated currentProject
            projectList.map((i) => {
                if (i.project === projectObj.project) {
                    console.log(i)
                    return currentProject
                } else {
                    return i
                }
            })
        )
        //clear the inputs themselves
        setNewDate({
            day: ""
        })
        console.log(projectList)
    }

    function onProjectAdd(e) {
        e.preventDefault()
        //add a project to state, based off the inputs
        setProjectList(
            [
                ...projectList,
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
                        // {
                        //     day: '',
                        //     categories: [
                        //         {
                        //             title: "",
                        //             description: "",
                        //             type: '',
                        //             entry: ''
                        //         }]
                        // },
                    ]
                }
            ]);

        //clear the inputs themselves
        setNewProject({
            project: "",
            purpose: ""
        })
    }

    function handleProjectClick(project) {
        const foundProject = projectList.find(proj => (proj.project === project));
        setNewDate({
            day: 0
        })
        setCurrentProject(foundProject)
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
            <Datenav onSubmit={onDateAdd} projectData={currentProject} handleClick={handleDateClick} handleChange={handleChangeNewDate} state={newDate} />
            <Categorynav onSubmit={() => onCategoryAdd} projectData={currentDate} />
        </main>
    )

}

export default Main