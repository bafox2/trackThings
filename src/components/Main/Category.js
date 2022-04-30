import React from "react";

function Category(props) {
    return (
        <div className="category" >
            <h2>Category Title</h2>
            <p>Category Description</p>
            <input type="text" />
        </div>
    )


}
export default Category

// import React from "react";

// class Category extends Component {
//     constructor(props) {
//         super()
//     }
//     // Project name, times updated, last updated, image(?)
//     render() {
//         return (
//             <div className="category" >

//                 <h2>{this.props.title}</h2>
//                 <p>{this.props.description}</p>
//                 <input type="{this.props.type}" />
//             </div>
//         )

//     }
// }
// export default Category