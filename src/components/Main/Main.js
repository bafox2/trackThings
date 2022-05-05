import React from "react";
import Button from "../Utils/Button";
import Projectcard from "./Projectcard";
import Datea from "./Date";
import Category from "./Category";
import { sampleprojects } from './sampoleprojects';

//might need to make a loop that does a project card for each project, then for each category nav, and dates
//might pass them in as props (?)
function Main() {
    const [projects, setProjects] = React.useState(sampleprojects)
    const [newCategory, setNewCategory] = React.useState({
        title: "",
        description: "",
        type: '',
    })
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
        <main className="content" >
            <div className="projectNav">
                <h2>Projects</h2>
                <Button text='+' buttonFunction='' />
                <div className="projectScroller" >
                    <Projectcard />
                    <Projectcard />
                    <Projectcard />
                </div>
                <form>
                    <input placeholder="Project title" />
                    <input placeholder="Reason for tracking" />
                    <Button text="add project" />
                </form>
            </div>

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
            </div>

            <div className="categoryNav" >
                <h2>Categories for Project on Date</h2>
                <h3>Reason for tracking:</h3>
                <form>
                    <input
                        type='input'
                        placeholder='new title'
                        onChange={handleChange}
                        name='title'
                        value={newCategory.title}
                    />
                    <input
                        type='input'
                        placeholder='new description'
                        onChange={handleChange}
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
                        <option value="null">-Type of-</option>
                        <option value="input">Text desctiption</option>
                        <option value="number">Number</option>
                        <option value="duration">Duration</option>
                        <option value="boolean">Boolean</option>
                        <option value="file">File</option>
                        <option value="url">URL</option>
                        <option value="option">Options</option>
                    </select>

                    <Button text="add category" buttonFunction={handleSubmit} />
                </form>
                <Category />
                <Category />
                <Category />
            </div>
        </main>
    )

}

export default Main