import React from 'react'
import Button from '../Utils/Button'

function Projectcard(props) {
  return (
    <div className='project' onClick={() => props.handleClick(props.project)}>
      <h2>{props.project || 'no props.project'}</h2>
      <h3>times updated: {props.timesUpdated || 0}</h3>
      <h3>last updated: {props.streak || 0}</h3>
      <Button text='x' buttonFunction={(e) => { e.stopPropagation(); props.onRemove(props.project) }} />
    </div>
  )
}

export default Projectcard
