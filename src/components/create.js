import React from 'react'
import Forms from './forms';
import Plain from './templates/plain';
import Header from './header';

function create( { details, setDetails, workExperiences, setWorkExperiences, projects, setProjects, education, 
    setEducation, languages, setLanguages, skills, setSkills }) {

    
  return (
    <div>
        <Header />
            <div className='flex h-screen'>
                <div className='w-[30%] overflow-auto'>
                    <Forms 
                        details={details} 
                        setDetails={setDetails} 
                        workExperiences={workExperiences} 
                        setWorkExperiences={setWorkExperiences} 
                        projects={projects}
                        setProjects={setProjects}
                        education={education}
                        setEducation={setEducation}
                        languages={languages}
                        setLanguages={setLanguages}
                        skills={skills}
                        setSkills={setSkills}
                    />
                </div>
                <div className='w-[50%] float-left overflow-y-auto'>
                    <Plain 
                        details={details} 
                        workExperiences={workExperiences} 
                        projects={projects}
                        education={education}
                        languages={languages}
                        skills={skills}
                    />
                </div>
                <div className='w-[20%] float-left overflow-y-auto'>
                    <div className='bg-white rounded-lg shadow-md p-4'>
                        <h1 className='text-xl font-bold'>Templates</h1>
                        <div className='flex flex-col mt-10'>
                            <div className='mx-auto'>
                                <div className='bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4'>
                                    <img src='/images/plain.png' alt='Plain Template' />
                                </div>
                                <div className='bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4'>
                                    <img src='/images/modern.png' alt='Modern Template' />
                                </div>
                                <div className='bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4'>
                                    <img src='/images/creative.png' alt='Creative Template' />
                                </div>
                                <div className='bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4'>
                                    <img src='/images/unique.png' alt='Unique Template' />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default create