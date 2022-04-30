import React from "react";

function Projectcard(props) {
    // Project name, times updated, last updated, image(?)

    return (
        <card className="project" >
            <h2>title</h2>
            <h3>times updated</h3>
            <h3>last updated</h3>
        </card>
    )

}

export default Projectcard

// import React from "react";

// class Projectcard extends Component {
//     constructor(props) {
//         super()
//     }
//     // Project name, times updated, last updated, image(?)
//     render() {
//         return (
//             <card className="project" >
//                  <img src='{this.props.img'} />
//                 <h2>this.props.title</h2>
//                 <h3>this.props.updateAmount</h3>
//                 <h3>this.props.streak</h3>
//             </card>
//         )

//     }
// }
// export default Projectcard