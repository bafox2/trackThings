import React from 'react'
import Button from '../Utils/Button'

function Date(props) {
  return (
    <div className='date' onClick={() => props.handleClick(props.day)}>
      <span>
        <h2>{props.day || 'no data: props.day'}</h2>
        <Button text='x' buttonFunction={() => props.onRemove(props.day)} />
      </span>
    </div>
  )
}

export default Date
