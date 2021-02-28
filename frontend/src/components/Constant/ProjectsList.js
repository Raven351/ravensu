import React from 'react'
import TextLang from '../TextLang'
const ProjectsList = [
    { 
        key: 0, 
        name: "ravensu",  
        pictureSrc:  "/img/ProjectsPictures/ravensu.png",
        technologiesIndexes: [7,8,9,10],
        github: "https://github.com/Raven351/ravensu",
        descShort: <TextLang textId = "projectShortDescRavensu"/>,
        desc: <TextLang textId = "projectLongDescRavensu"/>,
    },
    { 
        key: 1, 
        name: "DownhillPay",  
        pictureSrc:  "/img/ProjectsPictures/downhillpay.png",
        technologiesIndexes: [0,2,3,4, 5,6],
        github: "https://github.com/Raven351/DownhillPay",
        descShort: <TextLang textId = "projectShortDescDownhillPay"/>,
        desc: <TextLang textId = "projectLongDescDownhillPay"/>
    },
    { 
        key: 2, 
        name: "GAiT Podzialy",  
        pictureSrc:  "/img/ProjectsPictures/GAiT_Podzialy.png",
        technologiesIndexes: [3, 11],
        github: "https://github.com/Raven351/GAiTPodzialy",
        descShort: <TextLang textId = "projectShortDescGAiTPodzialy"/>,
        desc: <TextLang textId = "projectLongDescGAiTPodzialy"/>
    },
]

export default ProjectsList