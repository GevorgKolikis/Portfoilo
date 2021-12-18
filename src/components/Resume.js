import React from 'react';
import react from '../assets/icons/react.svg'
import Bar from './Bar';

const languages = [
    {
        icon: react,
        name: 'HTML',
        level: '75'
    },
    {
        icon: react,
        name: 'CSS',
        level: '60'
    },
    {
        icon: react,
        name: 'JS',
        level: '35'
    },
    {
        icon: react,
        name: 'React.js',
        level: '40'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'Figma',
        level: '85'
    },
    {
        icon: react,
        name: 'Photoshop',
        level: '45'
    },
    {
        icon: react,
        name: 'Illustrator',
        level: '60'
    },
    {
        icon: react,
        name: 'Framer',
        level: '45'
    },

]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card-heading">
                        Education
                    </h4>
                    <div className="resume-card-body">
                        <h5 className="resume-card-title">
                            Computer Science Enginnering
                        </h5>
                        <p className="resume-card-name">
                            Academy of Technology(2019-2022)
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card-heading">
                        Experience
                    </h4>
                    <div className="resume-card-body">
                        <h5 className="resume-card-title">
                            Student
                        </h5>
                        <p className="resume-card-name">
                            
                        </p>
                        <p className="resume-card-details">I am studying in a vocational high school named Vardges Hamazaspyan</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language-heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language-body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language-heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language-body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;