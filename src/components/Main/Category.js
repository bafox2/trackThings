import React from "react";
import Button from "../Utils/Button";

function Category(props) {
    const [categoryEntryData, setCategoryEntryData] = React.useState({
        title: "default cat",
        description: "default desc",
        type: 'input',
        entry: ''
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setCategoryEntryData(prevCatData => {
            return {
                ...prevCatData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // submitToApi(formData)
        console.log(categoryEntryData)
    }

    return (
        <div className="category" >
            <h2>{categoryEntryData.title}</h2>
            <input
                type={categoryEntryData.type}
                placeholder={categoryEntryData.description}
                onChange={handleChange}
                name='entry'
                value={categoryEntryData.entry}
            />
            <Button text='submit entry' buttonFunction={handleSubmit} />
            <Button text='x' />
        </div>
    )


}
export default Category

