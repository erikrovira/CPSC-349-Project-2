import React from 'react';

export default function Footer() {
    return (
        <footer className='bg-teal-700 text-white p-4 mt-8'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <div>
                    <p>© 2024, All rights reserved. Note: This is not a real, legally-enforced copyright.</p> {/*Footer text goes here*/}
                </div>
                <div className='flex space-x-4'>
                    <a href="https://github.com/erikrovira" target="_blank" rel="noopener noreferrer" className='hover:text-blue-300'>{/*Footer links go here*/}
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
