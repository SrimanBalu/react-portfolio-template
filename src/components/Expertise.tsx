import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C#",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    ".NET Framework",
    "React",
    "Angular",
    "Git",
    "Visual Studio",
    "VS Code"
];

const labelsSecond = [
    // "MongoDB",
    "SQL",
    "REST APIs",
    "Frontend Development",
    "Debugging",
    "Responsive Design",
    "API Integration",
    "Database Management",
    "Web Technologies"
];

const labelsThird = [
    "Full Stack Development",
    "Software Development",
    "Web Applications",
    "Client Projects",
    "Team Collaboration",
    "Problem Solving",
    "Code Quality",
    "Testing"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend Development</h3>
                    <p>Experienced in building responsive and user-friendly web applications using modern frontend technologies like React, Angular, and TypeScript with a focus on clean, maintainable code.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>Proficient in developing robust backend solutions using .NET frameworks, database management, and API development to ensure seamless client-server integration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Full Stack Solutions</h3>
                    <p>Capable of delivering end-to-end web applications with expertise in both frontend and backend development, ensuring scalable solutions for diverse client requirements.</p>
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