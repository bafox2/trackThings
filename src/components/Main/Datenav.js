import React from 'react'
import Datea from './Date'
import Button from '../Utils/Button'

function Datenav(props) {
  const selectedProject = props.projectData.find(
    (proj) => proj.project === props.selectedProject
  )
    ? props.projectData.find((proj) => proj.project === props.selectedProject)
    : { entries: [] }

  const datesToRender = selectedProject
    ? selectedProject.entries.map((entry) => (
      <Datea
        day={entry.day}
        categoryEntries={entry.categoryEntries}
        handleClick={props.handleClick}
        onRemove={props.onRemove}
      />
    ))
    : ''
  return (
    <div className='dateNav'>
      <h2>Date List</h2>
      <input
        type='date'
        onChange={props.handleChange}
        value={props.state.day}
        placeholder=''
        name='day'
      />
      <Button
        text='add date'
        buttonFunction={() => props.onSubmit(selectedProject)}
      />
      <br />
      {datesToRender.length === 0
        ? `no dates in ${props.selectedProject} yet`
        : datesToRender}
    </div>
  )
}
export default Datenav

//add date button shows the date selector
