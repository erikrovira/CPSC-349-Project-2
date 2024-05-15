import {HiHome} from 'react-icons/hi';

export default function NavigationBar() {
        return(
            <>
                <div className="flex item-center justify-between p-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
                    <div>
                        <a href="#" className="text-white font-mono text-3xl tracking-wider flex"><HiHome/></a> 
                    </div>
                    <div className="space-x-4">
                        <a href="#about" className="transition duration-500 ease-in-out text-white hover:bg-teal-700 rounded-full px-5 py-2 text-xl">About</a>
                        <a href="#experience" className="transition duration-500 ease-in-out text-white hover:bg-teal-700 rounded-full px-5 py-2 text-xl">Previous Work</a>
                        <a href="#projects" className="transition duration-500 ease-in-out text-white hover:bg-teal-700 rounded-full px-5 py-2 text-xl">Past Projects</a>
                        <a href="#contact" className="transition duration-500 ease-in-out text-white hover:bg-teal-700 rounded-full px-5 py-2 text-xl">Contact</a>
                    </div>
                </div>
            </>
        )
}