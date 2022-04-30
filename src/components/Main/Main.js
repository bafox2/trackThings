import React from "react";
import Projectnav from "./Projectnav";
import Datenav from "./Datenav";
import Categorynav from "./Categorynav";

function Main(props) {
    return (
        <main className="content" >
            <Projectnav />
            <Datenav />
            <Categorynav />
        </main>
    )

}

export default Main