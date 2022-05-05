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
    const [newDate, setNewDate] = React.useState({
        date: `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDay()}`
    })


    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setNewDate((prevDate) => {
            return {
                ...prevDate,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="dateNav" >
            <h2>Date List</h2>
            <input
                type='date'
                value={newDate.date}
                placeholder=''
                onChange={handleChange}
                name='date'
            />
            <Button text='add date' buttonFunction={handleSubmit} />
            <Datea />
            <Datea />
            <Datea />
            <Categorynav />
        </div>
    )
}
export default Datenav

//add date button shows the date selector