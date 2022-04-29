import React, { Component } from "react";
import Projectnav from "./Projectnav";
import Datenav from "./Datenav";
import Categorynav from "./Categorynav";

class Main extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <main className="content" >
                <Projectnav />
                <Datenav />
                <Categorynav />
            </main>
        )

    }
}
export default Main