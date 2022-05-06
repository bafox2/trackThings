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





    const entriesToRender = props.projectData.map(proj => proj.entries)
    // const datesToRender = entriesToRender.map(entries => entries.date)
    console.log(props.project)
    const datesToRender = (props.projectData.find(a => a.project === props.project).entries.map(a => <Datea day={a.date} />))
    // console.log(props.projectData) //array of all projects in total
    // console.log(entriesToRender) //array of every project entries array with every date and every category
    // console.log(entriesToRender[0]) //array of one projects entries array with every date
    // console.log(entriesToRender[0][0]) //one item in entries array with date and categories


    return (
        <div className="dateNav" >
            <h2>Date List</h2>
            <input
                type='date'
                value={props.state.date}
                placeholder=''
                onChange={props.handleChange}
                name='date'
            />
            <Button text="add project" buttonFunction={props.onSubmit()} />
            {datesToRender}
        </div>
    )
}
export default Datenav

//add date button shows the date selector