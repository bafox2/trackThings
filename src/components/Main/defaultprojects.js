
export const defaultProjects = [
    {
        project: '?????????????',
        purpose: 'to not weigh 200 lbs',
        picture: 'google.com/imgages/bigboi',
        defaults: [
            {
                title: "sleep time",
                description: "when did you lay in bed",
                type: 'input',
                entry: ''
            },
            {
                title: "cups of coffee",
                description: "how much caffeine",
                type: 'input',
                entry: ''
            },
            {
                title: "running",
                description: "how many minutes did you run",
                type: 'input',
                entry: ''
            }
        ],
        entries: [
            {
                day: '5/4/2022',
                categoryEntries: [
                    {
                        title: "sleep time",
                        description: "when did you lay in bed",
                        type: 'input',
                        entry: '10:00'
                    },
                    {
                        title: "cups of coffee",
                        description: "how much caffeine",
                        type: 'input',
                        entry: '6 cups'
                    },
                    {
                        title: "screen time",
                        description: "how much blue light",
                        type: 'input',
                        entry: '6 hours'
                    },
                    {
                        title: "running",
                        description: "how many minutes did you run",
                        type: 'input',
                        entry: '35'
                    }]
            },
            {
                day: '5/3/2022',
                categoryEntries: [
                    {
                        title: "sleep time",
                        description: "when did you lay in bed",
                        type: 'input',
                        entry: '10:30'
                    },
                    {
                        title: "cups of coffee",
                        description: "how much caffeine",
                        type: 'input',
                        entry: '7 cups'
                    },
                    {
                        title: "running",
                        description: "how many minutes did you run",
                        type: 'input',
                        entry: '30'
                    }]
            }
        ]
    },
    {
        project: 'basketball',
        purpose: 'to have a structure to team practices',
        picture: 'google.com/imgages/celtics',
        defaults: [
            {
                title: "sleep time",
                description: "when did you lay in bed",
                type: 'input',
                entry: ''
            },
            {
                title: "cups of coffee",
                description: "how much caffeine",
                type: 'input',
                entry: ''
            },
            {
                title: "running",
                description: "how many minutes did you run",
                type: 'input',
                entry: ''
            }
        ],
        entries: [
            {
                day: '5/1/2022',
                categoryEntries: [
                    {
                        title: "warmup game",
                        description: "how many buckets",
                        type: 'input',
                        entry: '120'
                    },
                    {
                        title: "missed layups",
                        description: "how many gimme points missed",
                        type: 'input',
                        entry: '5'
                    },
                    {
                        title: "time started",
                        description: "what time did you start?",
                        type: 'input',
                        entry: '5:00'
                    }]
            },
            {
                day: '4/28/2022',
                categoryEntries: [
                    {
                        title: "warmup game",
                        description: "how many buckets",
                        type: 'input',
                        entry: '110'
                    },
                    {
                        title: "missed layups",
                        description: "how many gimme points missed",
                        type: 'input',
                        entry: '5'
                    },
                    {
                        title: "time started",
                        description: "what time did you start?",
                        type: 'input',
                        entry: '5:00'
                    }]
            }
        ]
    },
    {
        project: 'valorant',
        purpose: 'to impress egirls',
        picture: 'google.com/imgages/celtics',
        defaults: [
            {
                title: "aim practice",
                description: "how many rounds",
                type: 'input',
                entry: ''
            },
            {
                title: "ranked w/l",
                description: "how much caffeine",
                type: 'input',
                entry: ''
            },
            {
                title: "youtube video watched",
                description: "how many minutes did you run",
                type: 'input',
                entry: ''
            }
        ],
        entries: [
            {
                day: '3/21/2022',
                categoryEntries: [
                    {
                        title: "aim practice",
                        description: "how many rounds",
                        type: 'input',
                        entry: '5'
                    },
                    {
                        title: "ranked w/l",
                        description: "how much caffeine",
                        type: 'input',
                        entry: '1.33'
                    },
                    {
                        title: "youtube video watched",
                        description: "how many minutes did you run",
                        type: 'input',
                        entry: 'imaqtpie'
                    }]
            },
            {
                day: '7/22/2022',
                categoryEntries: [
                    {
                        title: "warmup game",
                        description: "how many buckets",
                        type: 'input',
                        entry: '110'
                    },
                    {
                        title: "missed layups",
                        description: "how many gimme points missed",
                        type: 'input',
                        entry: '5'
                    },
                    {
                        title: "time started",
                        description: "what time did you start?",
                        type: 'input',
                        entry: '5:00'
                    }]
            }
        ]
    }
]

// // this is the old set projects
// setProjects(
//     [
//         {
        //     project: newProject.project,
        //     purpose: newProject.purpose,
        //     picture: '',
        //     defaults: [
        //         {
        //             title: "",
        //             description: "",
        //             type: '',
        //             entry: ''
        //         }
        //     ],
        //     entries: [
        //         {
        //             date: '',
        //             categoryEntries: [
        //                 {
        //                     title: "",
        //                     description: "",
        //                     type: '',
        //                     entry: ''
        //                 }]
        //         },
        //     ]
        // },
        // ...projects
//     ]);

//finding functions
// function findProject(projname) {
//     return defaultProjects.find(a => a.project === projname)
//     //return the object with the project with the same name?
// }

// function findDateEntryInProject(proj, date) {
//     return proj.entries.find(entry => entry.date === date)
// }

// function findCategoryInDateInProject(date, category) {
//     return date.categoryEntries.find(a => a.title === category)
// }
//examples
// const foundProject = findProject('basketball')
// const foundDate = findDateEntryInProject(foundProject, '5/1/2022')
// const foundCategory = findCategoryInDateInProject(foundDate, 'warmup game')

//date old thing
// const entriesToRender = props.projectData.map(proj => proj.entries)
// // const datesToRender = entriesToRender.map(entries => entries.date)
// console.log(props.project)
// const datesToRender = (props.projectData.find(a => a.project === props.project).entries.map(a => <Datea day={a.date} />))
// // console.log(props.projectData) //array of all projects in total
// // console.log(entriesToRender) //array of every project entries array with every date and every category
// // console.log(entriesToRender[0]) //array of one projects entries array with every date
// // console.log(entriesToRender[0][0]) //one item in entries array with date and categoryEntries

// handling dates
// const projectEntrycategoryEntries = currentProject.entries.map(entry => entry.categoryEntries)
// const projectEntryDates = currentProject.entries.map(entry => entry.date)
// console.log(projectEntrycategoryEntries)
// console.log(projectEntryDates)

// //the time thing
// const getCurrentYear = () => {
//     return new Date().getFullYear()
//   }
//   const getCurrentMonth = () => {
//     let month = new Date().getMonth()
//     month++
//     if (month <= 9) {
//       month = '0' + month
//     }
//     return month
//   }
//   const getCurrentDay = () => {
//     let day = new Date().getDay()
//     day++
//     if (day <= 9) {
//       day = '0' + day
//     }
//     return day
//   }