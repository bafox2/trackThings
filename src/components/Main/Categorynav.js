import React, { Component } from "react";
import Category from "./Category";
import Button from '../Utils/Button'

class Categorynav extends Component {
    constructor(props) {
        super()
    }
    //for each project render a project
    render() {
        return (
            <div className="categoryNav" >
                <h2>Categories for Project</h2>
                <Button text='add category' buttonFunction='' />
                <Category />
                <Category />
                <Category />
            </div>
        )

    }
}
export default Categorynav