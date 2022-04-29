import React, { Component } from "react";

class Projectcard extends Component {
    constructor(props) {
        super()
    }
    // Project name, times updated, last updated, image(?)
    render() {
        return (
            <card className="project" >
                <h2>title</h2>
                <h3>times updated</h3>
                <h3>last updated</h3>
            </card>
        )

    }
}
export default Projectcard