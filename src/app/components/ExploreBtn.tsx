"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ExploreBtn = () => {
    const handleClick = () => {
        console.log("Click");
    };

    return (
        <div className="flex flex-row justify-center gap-6 mt-7">
            {/* Explore Projects */}
            <a
                href="#projects"
                className="bg-white text-black text-lg border border-blue-500 rounded-full py-3 px-6 hover:bg-slate-800 hover:text-white transition-all duration-300 ease-in-out"
                onClick={handleClick}
            >
                Explore Projects
            </a>
            {/* Contact Me */}
            <a
                href="#contact"
                className="text-lg border border-blue-500 rounded-full py-3 px-6 hover:bg-slate-800 hover:text-white transition-all duration-300 ease-in-out"
                onClick={handleClick}
            >
                Contact Me
            </a>
            <a href="/Joel_Mogendi__CV_.pdf" download="Joel_Mogendi_CV.pdf"
                className="group flex items-center justify-center border border-blue-500 rounded-full h-[52px] px-[14px] hover:pr-6 hover:bg-slate-800 hover:text-white transition-all ease-in-out overflow-hidden"
                title="Download CV">
                {/* Download icon */}
                <svg className="w-6 h-6 shrink-0 text-blue-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                <span className="whitespace-nowrap overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-3 transition-all duration-500  ease-in-out font-medium text-lg">
                    Download CV
                </span>
            </a>
        </div>
    );
};

export default ExploreBtn;