import React from 'react'
import Projectnav from './Projectnav'
import Datenav from './Datenav'
import Categorynav from './Categorynav'
import { defaultProjects } from './defaultprojects'

//bugs
//when you clear a project, it still shows up as the current project in the Date List

//to do
//start looking into exporting
//add defaults on projectclick, posibly a button that brings up defaults in the ui
//write the help blurb
//    add a popup component
//start error handling or validationg data
//integrate selected project category

//try figuring out the entry onchanges
//mioght need to make the categories the id?

function Main(props) {
  const [projectList, setProjectList] = React.useState(defaultProjects)
  const [selectedProjectID, setSelectedProjectID] = React.useState(
    'this because there are no projects'
  )
  const [selectedProjectDate, setSelectedProjectDate] = React.useState('')

  const [selectedProjectCategory, setSelectedProjectCategory] =
    React.useState('')

  const [newProject, setNewProject] = React.useState({
    project: '',
    purpose: '',
  })
  const [newDate, setNewDate] = React.useState({
    day: '',
    categories: '',
  })
  const [newCategory, setNewCategory] = React.useState({
    title: '',
    description: '',
    type: '',
    entry: '',
    default: false,
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
  const handleChangeNewCategory = (event) => {
    const { name, value, type, checked } = event.target
    setNewCategory((prevNewCategory) => {
      return {
        ...prevNewCategory,
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
            entries: [
              ...proj.entries,
              {
                //could reformat this
                day: newDate.day,
                categoryEntries: proj.defaults,
              },
            ],
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
        entries: [],
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

  // it's moving date
  //it's also removing everything else about the object
  function onRemoveDate(dateID) {
    setProjectList(
      projectList.map((proj) => {
        if (proj.project === selectedProjectID) {
          console.log('changing this project')
          return {
            ...proj,
            entries: proj.entries.filter((entry) => entry.day !== dateID),
          }
        } else {
          return proj
        }
      })
    )
  }
<<<<<<< HEAD

  function onRemoveDate(dateID) {
    setProjectList(
      projectList.map((proj) => {
        if (proj.project === selectedProjectID) {
          console.log('changing this project')
          return {
            ...proj,
            entries: proj.entries.filter((entry) => entry.day !== dateID),
          }
        } else {
          return proj
        }
      })
    )
  }

  function onRemoveCategory(dateID) {
    setProjectList(
      projectList.map((proj) => {
        if (proj.project === selectedProjectID) {
          console.log('changing this project')
          return {
            ...proj,
            entries: proj.entries.filter((entry) => entry.day !== dateID),
=======
  //might need to set new thing after removing a thing
  function onRemoveCategory() {
    setProjectList(
      projectList.map((proj) => {
        if (proj.project === selectedProjectID) {
          console.log('we have the project')
          proj.project.entries.find(
            (entry) => entry.day === selectedProjectDate
          )
          // no we need the selected date to be
          // selectedProjectDate
          return {
            ...proj,
            //this, but for the entry
            entries: proj.entries.filter(
              (entry) => entry.categoryEntries !== selectedProjectCategory
            ),
>>>>>>> gitfix
          }
        } else {
          return proj
        }
      })
    )
  }
  // const newArr = currentProject.entries.filter(
  //   (entry) => entry.day !== dateID
  // )

  //   replace this with the projectList equivalent

  //find the current project
  //if the default is checked, add the category to the defaults
  //if the default isn't checked
  //      find the current date and add the category
  function onCategoryAdd(projectID, dateID) {
    console.log(projectID, 'proj')
    console.log(dateID, 'date')
    setProjectList(
      projectList.map((proj) => {
        console.log(proj.project, projectID.project)
        if (
          proj.project === projectID.project &&
          newCategory.default === true
        ) {
          // adding to defaults
          return {
            ...proj,
            defaults: [
              ...proj.defaults,
              {
                title: newCategory.title,
                description: newCategory.description,
                type: newCategory.type,
              },
            ],
          }
          //adding to a date
        } else if (
          proj.project === projectID.project &&
          newCategory.default === false
        ) {
          console.log('adding to specific date')
          return {
            ...proj,
            entries: proj.entries.map((entry) => {
              if (entry.day === dateID.day) {
                return {
                  ...entry,
                  categoryEntries: [
                    ...entry.categoryEntries,
                    {
                      title: newCategory.title,
                      description: newCategory.description,
                      type: newCategory.type,
                    },
                  ],
                }
              } else {
                return entry
              }
            }),
            //will need to map over the days and then update categoryentries?
          }
        } else {
          console.log('not being updated')
          return proj
        }
      })
    )
    setNewCategory({
      title: '',
      description: '',
      type: '',
      entry: '',
      default: false,
    })
  }

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
    const foundProject = projectList.find(
      (proj) => proj.project === selectedProjectID
    )
    const foundEntry = foundProject.entries.find((a) => a.day === date)
    setSelectedProjectDate(foundEntry)
  }
  //use the currentProjectID to find the entry in project List
  function handleCategoryClick(entry) {
    const foundProject = projectList.find(
      (proj) => proj.project === selectedProjectID
    )
    const foundEntry = foundProject.entries.find(
      (a) => a.day === selectedProjectDate
    )
    const foundCategory = foundEntry.categoryEntries.find(
      (a) => a.title === entry
    )
    setSelectedProjectCategory(foundCategory)
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
        onRemove={onRemoveDate}
        state={newDate}
      />
      <Categorynav
        projectData={projectList}
        selectedProject={selectedProjectID}
        selectedDate={selectedProjectDate}
        selectedCategory={selectedProjectCategory}
        onRemove={onRemoveCategory}
        onSubmit={onCategoryAdd}
        handleChange={handleChangeNewCategory}
        state={newCategory}
      />
    </main>
  )
}

export default Main
