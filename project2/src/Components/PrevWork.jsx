import React from 'react';

export default function PreviousWork() {
    // information to be displayed under past projects section below
    const experiences = [
        {
            id: 1,
            title: 'Role Title',
            company: 'Company Name',
            time: 'Jan 2024 - May 2024',
            details: [
                'This is a placeholder entry for detailing experiences in the future.'
            ]
        }
    ];

    //  this dictates how the above experience information is displayed
    return (
        <>
            <div id ="experience" className='flex items-center justify-left h-screen'>
                <div className='bg-teal-700 p-20 max-w-4xl rounded-full'>
                    <h1 className='text-5xl text-white text-center mb-10'>Previous Work</h1>
                    {experiences.map((exp) => ( // Map the info above to display previous work experiences
                        <div key={exp.id} className="mt-5">
                            <h2 className='text-3xl text-white'>{exp.title}, {exp.company}</h2>
                            <p className='text-white'>{exp.time}</p>
                            <ul className='list-disc list-inside text-white'>
                                {exp.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
