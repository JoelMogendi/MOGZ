import React from 'react';
import Image from 'next/image';

const Projects = () => {
    return (
        <section id='projects' className='max-w-7xl mx-auto px-4 py-32'>
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="font-bold text-3xl md:text-4xl mb-4">Featured Projects</h2>
                <p className='text-xl text-slate-400'>Some of the projects I've worked on</p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
                {/* proiject 1 */}
                <div className='bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-colors duration-300' data-aos="fade-up">
                    <div className='w-full h-64 relative bg-slate-700'>
                        <Image src="/Evanson.png" alt='Evanson tents project' fill className='object-cover' />
                    </div>

                    <div className='p-8'>
                        <h3 className='text-2xl font-bold text-white mb-2'>Evanson Tents & Chairs</h3>
                        <p className='text-blue-400 font-medium mb-4'>MERN Stack</p>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            A modern, fast-loading landing page built for a local event rental business in Kisii County to increase their digital footprint and streamline customer inquiries.
                        </p>
                    </div>

                    {/* The Links */}
                    <div className="flex gap-8 flex-row items-center">
                        <a href="https://evanson-tents-and-chairs.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                            Live Demo
                        </a>
                        {/* Optional GitHub link if the code is public */}
                        <a href="https://github.com/JoelMogendi/Evanson-tents.git" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;