import React from "react";
import Projectnav from "./Projectnav";
import Datenav from "./Datenav";
import Categorynav from "./Categorynav";
import { defaultProjects } from "./defaultprojects";

function Main(props) {
    const [projects, setProjects] = React.useState(defaultProjects)

    const blankProject = {
        title: '',
        purpose: '',
        picture: '',
        defaults: [
            {
                title: "",
                description: "",
                type: '',
                entry: ''
            }
        ],
        entries: [
            {
                date: '',
                categories: [
                    {
                        title: "",
                        description: "",
                        type: '',
                        entry: ''
                    }]
            },
        ]
    }
    function onProjectAdd(e) {
        e.preventDefault()

        //add a project to state, based off the inputs
        setProjects(
            [
                {
                    title: newProject.value,
                    purpose: newProject.value,
                    picture: '',
                    defaults: [
                        {
                            title: "",
                            description: "",
                            type: '',
                            entry: ''
                        }
                    ],
                    entries: [
                        {
                            date: '',
                            categories: [
                                {
                                    title: "",
                                    description: "",
                                    type: '',
                                    entry: ''
                                }]
                        },
                    ]
                },
                ...projects
            ]);
        //clear the inputs themselves
        setState({
            newProject.project = ''
            newProject.purpose = ''
        })
        console.log(projects)
    }

    function onDateAdd(e) {
        e.preventDefault()
        console.log('working:)')
    }

    function onCategoryAdd(e) {
        e.preventDefault()
        console.log('working:)')
    }

    // const handleChange = (event) => {
    //     const { name, value, type, checked } = event.target
    //     setCategoryEntryData(prevCatData => {
    //         return {
    //             ...prevCatData,
    //             [name]: type === "checkbox" ? checked : value
    //         }
    //     })
    // }

    return (
        <main className="content" >
            <Projectnav onSubmit={() => onProjectAdd} />
            <Datenav onSubmit={() => onDateAdd} />
            <Categorynav onSubmit={() => onCategoryAdd} />
        </main>
    )

}

export default Main