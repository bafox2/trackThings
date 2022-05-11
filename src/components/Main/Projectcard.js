import React from "react";
import Button from '../Utils/Button'

function Projectcard(props) {
    // Project name, times updated, last updated, image(?)
    // console.log(props.handleClick('health'))
    // console.log(props.project)
    return (
        <div className="project" onClick={() => props.handleClick(props.project)} >
            <h2>{props.project || 'no props.project'}</h2>
            <h3>times updated: {props.timesUpdated || 0}</h3>
            <h3>last updated: {props.streak || 0}</h3>
            <Button text='x' />
        </div>
    )

}

export default Projectcard



//not needed (i think)
// const [project, setproject] = React.useState({
//     title: "default proj",
//     timesUpdated: 0,
//     streak: 0,
//     isFavorite: false
// })