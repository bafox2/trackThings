import React from 'react'
import Category from './Category'
import Button from '../Utils/Button'

function Categorynav(props) {
  const [newCategory, setNewCategory] = React.useState({
    title: '',
    description: '',
    type: '',
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setNewCategory((prevNewCategory) => {
      return {
        ...prevNewCategory,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // submitToApi(formData)
  }
  console.log(props.projectData, 'this is categorynav projectdata')
  // const datesToRender = (props.projectData === undefined) ? 'no project selected' : props.projectData.entries.map(entry => <Datea day={entry.date} categoryEntries={entry.categories} handleClick={props.handleClick} />)
  const categoriesToRender =
    props.projectData === undefined
      ? 'no date selected'
      : props.projectData.length === 0
      ? 'no categories avail'
      : props.projectData.categoryEntries.map((entry) => (
          <Category
            title={entry.title}
            description={entry.description}
            handleChange={props.handleChange}
            entry={entry.entry}
            type={entry.type}
            handleClick={props.handleClick}
          />
        ))

  return (
    <div className='categoryNav'>
      <h2>Categories for Project on Date</h2>
      <h3>Reason for tracking:</h3>
      <form>
        <input
          type='input'
          placeholder='new title'
          onChange={props.handleChange}
          name='title'
          value={newCategory.title}
        />
        <input
          type='input'
          placeholder='new description'
          onChange={props.handleChange}
          name='description'
          value={newCategory.description}
        />
        <select
          id='inputOptions'
          placeholder='placeholder'
          onChange={handleChange}
          name='type'
          value={newCategory.type}
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
        <Button text='add project' buttonFunction={props.onSubmit()} />
      </form>
      {categoriesToRender}
    </div>
  )
}
export default Categorynav

//add catefogy buttons shows input for
// title and type

//types
//checkbox, dropdown(?), image(?), file(?), text(?), url(?),range,time,text,longtext,duration
