import React from 'react';

export default function Projects() {
    const projects = [     // Array for past projects
        {
            id: 0,
            title: 'Crossy Road Game Project',
            description: 'This was a recreation of the game Crossy Road, made to learn Unreal Engine.'
        },
    ];

    return (
        <>
            <div id="projects" className='bg-teal-700 rounded-full m-20 max-w-full'>
                <div className='grid justify-items-end m-10'>  {/* Fix object alignment */}
                    <h1 className='text-5xl text-white mt-10 mb-10'>Past Projects</h1>
                    {projects.map(project => ( // Map the projects to eachother 
                        <div key={project.id} className="mb-10 text-end w-full">
                            <h2 className='text-4xl text-white'>{project.title}</h2>
                            <p className='text-white'>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
