import React from "react";
import Category from "./Category";
import Button from '../Utils/Button'

function Categorynav(props) {
    return (
        <div className="categoryNav" >
            <h2>Categories for Project on Date</h2>
            <h3>Reason for tracking:</h3>
            <Button text='add category' buttonFunction='' />
            <Category />
            <Category />
            <Category />
        </div>
    )

}
export default Categorynav

