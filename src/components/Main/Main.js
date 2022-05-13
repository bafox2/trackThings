import React from 'react'
import Projectnav from './Projectnav'
import Datenav from './Datenav'
import Categorynav from './Categorynav'
import { defaultProjects } from './defaultprojects'

//bugs
//when you clear a project, it still shows up as the current project in the Date List

//to do
//add on change for categories
//start looking into exporting
//write the help blurb
//start error handling or validationg data

//try figuring out the entry onchanges
//mioght need to make the categories the id?

function Main(props) {
    const [projectList, setProjectList] = React.useState(defaultProjects)
    const [selectedProjectID, setSelectedProjectID] = React.useState('this because there are no projects')
    const [selectedProjectDate, setSelectedProjectDate] = React.useState('')

    const [newProject, setNewProject] = React.useState({
        project: '',
        purpose: '',
    })
    const [newDate, setNewDate] = React.useState({
        day: '',
        categories: '',
    })
    const [newCategory, setNewCategory] = React.useState({
        day: '',
        categories: '',
    })

    const handleChangeNewProj = (event) => {
        const { name, value, type, checked } = event.target
        setNewProject((prevNewCategory) => {
            return {
                ...prevNewCategory,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }
    const handleChangeNewDate = (event) => {
        const { name, value, type, checked } = event.target
        setNewDate((prevDate) => {
            return {
                ...prevDate,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }


    function onDateAdd(projectID) {
        setProjectList(
            projectList.map((proj) => {
                if (proj.project === projectID.project) {
                    console.log(proj, projectID, 'working and')
                    return {
                        ...proj,
                        entries: [...proj.entries,
                        {
                            //could reformat this
                            day: newDate.day,
                            categoryEntries: proj.defaults,
                        }
                        ]
                    }
                } else {

                    return proj
                }

            })
        )

        setNewDate({
            day: '',
        })
    }

    function onProjectAdd(e) {
        e.preventDefault()
        //add a project to state, based off the inputs
        setProjectList([
            ...projectList,
            {
                project: newProject.project,
                purpose: newProject.purpose,
                picture: '',
                defaults: [
                    {
                        title: '',
                        description: '',
                        type: '',
                        entry: '',
                    },
                ],
                entries: [

                ],
            },
        ])

        setNewProject({
            project: '',
            purpose: '',
        })
    }

    function onRemoveProject(projID) {
        setProjectList(projectList.filter((proj) => proj.project !== projID))
    }

    // // needs to use ID instead
    //     function onRemoveDate(dateID) {
    //         const newArr = currentProject.entries.filter(
    //             (entry) => entry.day !== dateID
    //         )
    //replace this with the projectList equivalent
    // setCurrentProject({
    //     ...currentProject,
    //     entries: newArr,
    // })



    function handleProjectClick(project) {
        const foundProject = projectList.find((proj) => proj.project === project)
        setNewDate({
            day: 0,
        })
        setSelectedProjectID(foundProject.project)
        setSelectedProjectDate('')
    }
    //use the currentProjectID to find the entry in project List
    function handleDateClick(date) {
        const foundProject = projectList.find((proj) => proj.project === selectedProjectID)
        const foundEntry = foundProject.entries.find((a) => a.day === date)
        setSelectedProjectDate(foundEntry)
    }

    function onCategoryAdd(e) {
        e.preventDefault()
        console.log('working:)')
    }

    return (
        <main className='content'>
            <Projectnav
                projectData={projectList}
                onSubmit={() => onProjectAdd}
                handleClick={handleProjectClick}
                onRemove={onRemoveProject}
                handleChange={handleChangeNewProj}
                state={newProject}
            />
            <Datenav
                projectData={projectList}
                selectedProject={selectedProjectID}
                onSubmit={onDateAdd}
                handleClick={handleDateClick}
                handleChange={handleChangeNewDate}
                // onRemove={onRemoveDate}
                state={newDate}
            />
            <Categorynav
                onSubmit={() => onCategoryAdd}
                projectData={projectList}
                selectedProject={selectedProjectID}
                selectedDate={selectedProjectDate}
            />
        </main>
    )
}

export default Main
