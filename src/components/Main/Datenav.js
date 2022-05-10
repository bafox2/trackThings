import React from "react";
import Datea from "./Date";
import Button from "../Utils/Button";
import Categorynav from './Categorynav'

function Datenav(props) {
    console.log(props.projectData)
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
    // console.log(props.projectData.entries)
    const datesToRender = (props.projectData === undefined) ? 'no project selected' : props.projectData.entries.map(entry => <Datea day={entry.date} categoryEntries={entry.categories} handleClick={props.handleClick} />)





    return (
        <div className="dateNav" >
            <h2>Date List</h2>
            <input
                type='date'
                onChange={props.handleChange}
                value={props.state.date}
                placeholder=''
                name='date'
            />
            <Button text="add date" buttonFunction={props.onSubmit()} />
            <br />
            {datesToRender}
        </div>
    )
}
export default Datenav

//add date button shows the date selector