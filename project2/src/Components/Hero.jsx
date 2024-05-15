import React, { useState } from 'react';
import { BsGithub, BsInfoCircleFill } from 'react-icons/bs';

export default function Hero() {
    const [showResume, setShowResume] = useState(false); // State to control resume display

    const toggleResume = () => setShowResume(!showResume); // Function to turn the resume on/off

    return (
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'> 
            <div className='lg:w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-5'>Welcome to my portfolio site! My name is:</p>
                <h1 className='text-7xl'>Erik Rovira</h1>
                <p className='mt-10 text-xl'>
                Currently working towards a Computer Science degree at CSUF.
                </p>
                <div className='flex mt-5 space-x-4 cursor-pointer'> 
                    {/*Link for GitHub site*/}
                    <a href="https://github.com/erikrovira" target="_blank" rel="noopener noreferrer"
                        className='transition duration-500 ease-in-out text-white hover:bg-slate-600 rounded-full'> 
                        <BsGithub size={50} />
                    </a>
                    <button onClick={toggleResume}
                        className='transition duration-500 ease-in-out text-white hover:bg-slate-600 rounded-full'> 
                        <BsInfoCircleFill size={50} />
                    </button>
                </div>
            </div>
            <div></div>
            <div className={`resume-viewer ${showResume ? 'open' : ''}`} aria-hidden={!showResume}>
                <iframe
                    src=""
                    frameborder="0"
                    style={{ width: '100%', height: '100%', border: 'none' }}>
                </iframe>
            </div>

            <style jsx>{` //
                .resume-viewer {
                    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 80%; height: 80%; background-color: rgba(0, 0, 0, 0.85); z-index: 1000;
                    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
                    opacity: 0; visibility: hidden;
                }
                .resume-viewer.open {
                    opacity: 1; visibility: visible;
                }
            `}</style>
        </section>
    );
}
