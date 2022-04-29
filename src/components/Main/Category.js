import React, { Component } from "react";

class Category extends Component {
    constructor(props) {
        super()
    }
    // Project name, times updated, last updated, image(?)
    render() {
        return (
            <div className="category" >
                <h2>Category Title</h2>
                <p>Category Description</p>
                <input type="text" />
            </div>
        )

    }
}
export default Category