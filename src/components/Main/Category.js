import React from 'react'
import Button from '../Utils/Button'

function Category(props) {
  return (
    <div className='category'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <input
        type={props.type}
        placeholder='enter input'
        onChange={props.handleChange}
        name='entry'
        value={props.entry}
      />
      <Button text='submit entry' buttonFunction={props.handleSubmit} />
      <Button text='x' />
    </div>
  )
}
export default Category
