import React from 'react'
import Category from './Category'
import Button from '../Utils/Button'

function Categorynav(props) {
  //find the project
  const selectedProject = props.projectData.find(
    (proj) => proj.project === props.selectedProject
  )
    ? props.projectData.find((proj) => proj.project === props.selectedProject)
    : { entries: [] }
  //find the date
  const selectedDate = selectedProject.entries.find(
    (entry) => entry.day === props.selectedDate.day
  )

  //render the categories
  //here was old render
  const categoriesToRender = selectedDate
    ? selectedDate.categoryEntries.map((entry) => (
        <Category
          title={entry.title}
          description={entry.description}
          handleChange={props.handleChange}
          entry={entry.entry}
          type={entry.type}
          handleClick={props.handleClick}
        />
      ))
    : 'no date selected'

  return (
    <div className='categoryNav'>
      <h2>Categories for {selectedProject.project} project on Date</h2>
      <h3>Reason for tracking:</h3>
      <form>
        <input
          type='input'
          placeholder='new title'
          onChange={props.handleChange}
          name='title'
          value={props.state.title}
        />
        <input
          type='input'
          placeholder='new description'
          onChange={props.handleChange}
          name='description'
          value={props.state.description}
        />
        <select
          id='inputOptions'
          placeholder='placeholder'
          onChange={props.handleChange}
          name='type'
          value={props.state.type}
        >
          <option value='null'>-Type of-</option>
          <option value='input'>Text desctiption</option>
          <option value='number'>Number</option>
          <option value='duration'>Duration</option>
          <option value='boolean'>Boolean</option>
          <option value='file'>File</option>
          <option value='url'>URL</option>
          <option value='option'>Options</option>
        </select>
        <label>add to defaults?</label>
        <input
          type='checkbox'
          placeholder=''
          onChange={props.handleChange}
          name='default'
          value={props.state.default}
        />

        <Button
          text='add category'
          buttonFunction={(e) => {
            e.preventDefault()
            props.onSubmit(selectedProject, selectedDate)
          }}
        />
      </form>

      {categoriesToRender || 'woops'}
    </div>
  )
}
export default Categorynav

//add catefogy buttons shows input for
// title and type

//types
//checkbox, dropdown(?), image(?), file(?), text(?), url(?),range,time,text,longtext,duration
