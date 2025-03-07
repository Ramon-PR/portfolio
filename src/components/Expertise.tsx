import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython  } from '@fortawesome/free-brands-svg-icons';
import { faPlane, faSatellite, faJetFighter, faEarth, faBrain, faSquarePollVertical} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    // "React",
    // "TypeScript",
    // "JavaScript",
    // "HTML5",
    // "CSS3",
    // "SASS",
    // "Flask",
    // "Python",
    // "MATLAB",
    // "Fortran",
    // "C++",
    // "SQL",
    // "PostgreSQL",
    // "Postman"
    "Calculus",
    "Physics",
    "Thermodynamics",
    "Fluid Dynamics",
    "Solid Mechanics",
    "Propulsion",
    "Aerodynamics",
    "Aircraft Design",
];

const labelsSecond = [
    // "Git",
    // "GitHub Actions",
    // "Docker",
    // "AWS",
    // "Azure",
    // "Linux",
    // "Snowflake",
    // "Pandas",
    // "Selenium",
    "Fortran",
    "C++",
    "Python",
    "MATLAB",
    "Pytorch",
];

const labelsThird = [
    // "OpenAI",
    // "Groq",
    // "LangChain",
    // "Qdrant",
    // "Hugging Face",
    // "LlamaIndex",
    // "Streamlit",
    "CAD",
    "CFD",
    "FEA",
    "Catia",
    "FreeCAD",
    "Patran",
    "Nastran",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                <div className="skill">
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FontAwesomeIcon icon={faPlane} size="3x"/>
                        <FontAwesomeIcon icon={faEarth} size="3x"/>
                        <FontAwesomeIcon icon={faSatellite} size="3x"/>
                    </div>
                    <h3>Aerospace</h3>
                    <p>I have studied the bachelor of aeronautic engineering, providing a broad knowledge in engineering. From solid and fluid dynamics, propulsion and even electronics. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FontAwesomeIcon icon={faBrain} size="3x"/>
                        <FontAwesomeIcon icon={faSquarePollVertical} size="3x"/>
                        <FontAwesomeIcon icon={faPython} size="3x"/>
                    </div>
                    <h3>Data Science / Research and AI</h3>
                    <p> As a PhD and PostDoc researcher we develop the ability to learn new topics and tools,
                        such as programming in different languages, performing simulations in large clusters and analysing data. 
                        Sometimes a direct algorithmic approach is needed and sometimes the topic required the use of AI.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Mechanical Design</h3>
                    <p> Looking for a way to contribute to society, I try to keep updated with Mechanical design, and learn  new 
                        topics where I can use my knowledge in a more applied way. Designing pieces or mechanisms that can be 3D printed,
                        learning a little about embedded systems and electronics, or even reusing old phones by creating my custom Android apps.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

               
            </div>
        </div>
    </div>
    );
}

export default Expertise;