import React from 'react';
import { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className='qualification section ' id = "qualification">
            <h2 className='section_title'>Qualifications</h2>
            <span className='section_subtitle'>My Personal Journey</span>

            <div className='qualification_container container'>
                <div className='qualification_tabs'>
                    <div
                        className={toggleState === 1
                            ? "qualification_button qualification_active button--flex"
                            : "qualification_button button--flex "}
                        onClick={() => toggleTab(1)}
                    >
                        <i className='uil uil-graduation-cap qualification_icon'></i>Education
                    </div>

                    <div
                        className={toggleState === 2
                            ? "qualification_button qualification_active button--flex"
                            : "qualification_button button--flex "}
                        onClick={() => toggleTab(2)}
                    >
                        <i className='uil uil-briefcase-alt qualification_icon'></i>Experience
                    </div>
                </div>

                <div className="qualification_sections">
                    {toggleState === 1 && (
                        <div className={`qualification_content ${toggleState === 1 ? 'qualification_content-active left-section' : ''}`}>
                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">Senior Secondary Education</h3>
                                    <span className="qualification_subtitle">
                                        Police Modern School , Haridwar
                                    </span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calender"></i>
                                        2022
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>

                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">Bachelor's in Computer Science</h3>
                                    <span className="qualification_subtitle">
                                        Chandigarh University
                                    </span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calender"></i>
                                        2022-Present
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    {/* No line after the last qualification */}
                                </div>
                            </div>
                        </div>
                    )}

                    {toggleState === 2 && (
                        <div className={`qualification_content qualification_content-active experience-section right-section`}>

                            {/* <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">Software Engineer</h3>
                                    <span className="qualification_subtitle">
                                        Big Tech Solutions
                                    </span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calender"></i>
                                        2018-2020
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div> */}

                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">Frontend Developer Intern</h3>
                                    <span className="qualification_subtitle">
                                    OctaNet Services Pvt Ltd.
                                    </span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calender"></i>
                                        Feb 2024-Present
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Qualification;
