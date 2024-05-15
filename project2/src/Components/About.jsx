import React from 'react';

export default function About() { 
    return (
        <>
            <div id="about" className='bg-teal-700 m-20  rounded-full'>  {/* Set the container parameters */}
                <div className='flex justify-end'>
                    <div className='flex flex-col items-start m-10'>
                        <h1 className='text-5xl text-white mb-10'>About Me</h1>
                        <p className='text-xl text-white'> {/* About Information goes here */}
                            Currently, I am studying Computer Science at California State University, Fullerton.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
