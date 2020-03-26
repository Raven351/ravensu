const ProjectsList = [
    { 
        key: 0, 
        name: "ravensu",  
        pictureSrc:  "/img/ProjectsPictures/skiingphoto.jpg",
        technologiesIndexes: [0,0,0,0,],
        github: "",
        descShort: "Thesis project. Skiing payment system that uses RFID cards",
        desc: "Thesis project. Skiing payment system that uses RFID cards.\n This project includes C# client app for card registration and top-ups, PostgreSQL DB scripts, REST API generated through postgREST software, and C++ program for Arduino which is used as cards reader for client app. \n I've been working on this project individually and used Git as a version control tool. Created client application is object-oriented and uses WPF. It also uses RESTSharp library in order to communicate with REST API provided by postgREST" 
    },
    { 
        key: 1, 
        name: "DownhillPay",  
        pictureSrc:  "/img/ProjectsPictures/bustestphoto.jpg",
        technologiesIndexes: [0],
        desc: "Some description" 
    },
]

export default ProjectsList