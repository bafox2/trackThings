import React from "react";
import Button from "../Utils/Button";

function Category(props) {
    // const [categoryEntryData, setCategoryEntryData] = React.useState({
    //     title: "default cat",
    //     description: "default desc",
    //     type: 'input',
    //     entry: ''
    // })

    // const handleChange = (event) => {
    //     const { name, value, type, checked } = event.target
    //     setCategoryEntryData(prevCatData => {
    //         return {
    //             ...prevCatData,
    //             [name]: type === "checkbox" ? checked : value
    //         }
    //     })
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        // submitToApi(formData)
        // console.log(categoryEntryData)
    }

    return (
        <div className="category" >
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <input
                type={props.type}
                placeholder="enter input"
                onChange={props.handleChange}
                name='entry'
                value={props.entry}
            />
            <Button text='submit entry' buttonFunction={handleSubmit} />
            <Button text='x' />
        </div>
    )


}
export default Category

