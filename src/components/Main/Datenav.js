import React from "react";
import Datea from "./Date";
import Button from "../Utils/Button";
import Categorynav from './Categorynav'

function Datenav(props) {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const getCurrentMonth = () => {
        let month = new Date().getMonth()
        month++
        if (month <= 9) {
            month = '0' + month
        }
        return month
    };
    const getCurrentDay = () => {
        let day = new Date().getDay()
        day++
        if (day <= 9) {
            day = '0' + day
        }
        return day
    };
    const datesToRender = (props.projectData === undefined) ? 'no project selected' : props.projectData.entries.map(entry => <Datea day={entry.day}
        categoryEntries={entry.categoryEntries} handleClick={props.handleClick} />)
    const logit = (props.projectData === undefined) ? 'test' : props.projectData
    console.log(logit)



    return (
        <div className="dateNav" >
            <h2>Date List</h2>
            <input
                type='date'
                onChange={props.handleChange}
                value={props.state.day}
                placeholder=''
                name='day'
            />
            <Button text="add date" buttonFunction={() => props.onSubmit(props.projectData)} />
            <br />
            {datesToRender.length === 0 ? `no dates in ${props.projectData.project} yet` : datesToRender}
        </div>
    )
}
export default Datenav

//add date button shows the date selector