import React from 'react'
import Projectnav from './Projectnav'
import Datenav from './Datenav'
import Categorynav from './Categorynav'
// import { defaultProjects } from "./defaultprojects";

function Main(props) {
  const [projectList, setProjectList] = React.useState([])
  const [currentProject, setCurrentProject] = React.useState()
  const [currentDate, setCurrentDate] = React.useState()

  const [newProject, setNewProject] = React.useState({
    project: '',
    purpose: '',
  })
  const [newDate, setNewDate] = React.useState({
    day: '',
    categories: '',
  })

  //can merge these with sometype of if?
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
  //going to try changing the thing working off of current project to wotking off of projectObj
  function onDateAdd(projectObj) {
    //add a project to state, based off the inputs
    setCurrentProject({
      ...currentProject,
      inserrted: 'ass',
      entries: [
        ...currentProject.entries,

        {
          //could reformat this
          day: newDate.day,
          categoryEntries: currentProject.defaults,
        },
      ],
    })

    setProjectList(() =>
      //now replace the entry without the date to the new updated currentProject
      projectList.map((i) => {
        if (i.project === projectObj.project) {
          return currentProject
        } else {
          return i
        }
      })
    )
    // clear the inputs themselves
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
          //   {
          //     day: '',
          //     categoryEntries: '',
          //   },
        ],
      },
    ])

    //clear the inputs themselves
    setNewProject({
      project: '',
      purpose: '',
    })
  }

  function onRemoveProject(projID) {
    setProjectList(projectList.filter((proj) => proj.project !== projID))
  }

  function onRemoveDate(dateID) {
    const newArr = currentProject.entries.filter(
      (entry) => entry.day !== dateID
    )

    setCurrentProject({
      ...currentProject,
      entries: newArr,
    })
    //need to update 'global' project list after tinkering with the individual
    setProjectList([...projectList])
  }

  function handleProjectClick(project) {
    const foundProject = projectList.find((proj) => proj.project === project)
    setNewDate({
      day: 0,
    })
    setCurrentProject(foundProject)
  }
  function handleDateClick(date) {
    const foundEntry = currentProject.entries.find((a) => a.day === date)
    setCurrentDate(foundEntry)
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
        onRemove={onRemoveProject}
        handleClick={handleProjectClick}
        handleChange={handleChangeNewProj}
        state={newProject}
      />
      <Datenav
        projectData={currentProject}
        onSubmit={onDateAdd}
        handleClick={handleDateClick}
        handleChange={handleChangeNewDate}
        onRemove={onRemoveDate}
        state={newDate}
      />
      <Categorynav onSubmit={() => onCategoryAdd} projectData={currentDate} />
    </main>
  )
}

export default Main
