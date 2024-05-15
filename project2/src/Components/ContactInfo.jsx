import React from 'react';

export default function Contact() {
    return (
        <div id="contact" className='bg-teal-700 p-10 m-20 max-w-lg mx-auto rounded-full'> {/* Set the container parameters */}
            <h1 className='text-4xl text-white mb-6 text-center'>Contact Email</h1>
            <div className='text-center'>
                <a href="mailto:erikrovira@csu.fullerton.edu" /* email link goes here*/
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>
                    Email erikrovira@csu.fullerton.edu
                </a>
            </div>
        </div>
    );
}
