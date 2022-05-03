import React from "react";
import Category from "./Category";
import Button from '../Utils/Button'

function Categorynav(props) {
    const [newCategory, setNewCategory] = React.useState({
        title: "",
        description: "",
        type: '',
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setNewCategory(prevNewCategory => {
            return {
                ...prevNewCategory,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // submitToApi(formData)
        console.log(newCategory)
    }

    return (
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
    )

}
export default Categorynav

//add catefogy buttons shows input for 
// title and type

//types
//checkbox, dropdown(?), image(?), file(?), text(?), url(?),range,time,text,longtext,duration
