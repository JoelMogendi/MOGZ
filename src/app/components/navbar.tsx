"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    // Track if the mobile menu is open or not
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 w-full">
            <nav className="bg-slate-900/80 backdrop-blur-md py-3 mx-auto flex justify-between items-center px-10">
                <a href="#" className="logo flex flex-row gap-3 items-center">
                    <Image src="/mogz.ico" alt="Mogz" width={48} height={48} className="bg-gray-300 rounded-full object-cover" />
                    <p className="font-bold text-xl truncate">JOEL MOGENDI</p>
                </a>
                <Button className="md:hidden text-slate-200 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </Button>

                {/* Desktop Links */}
                <ul className="hidden md:flex flex-row gap-6 justify-end">
                    <a href="#" className=" hover:underline hover:cursor-pointer hover:text-red-200 transition-colors duration-300 underline-offset-2">Home</a>
                    <a href="#about" className=" hover:underline hover:cursor-pointer hover:text-red-200 transition-colors duration-300 underline-offset-2">About</a>
                    <a href="#skill" className=" hover:underline hover:cursor-pointer hover:text-red-200 transition-colors duration-300 underline-offset-2">Skill</a>
                    <a href="#projects" className=" hover:underline hover:cursor-pointer hover:text-red-200 transition-colors duration-300 underline-offset-2">Projects</a>
                    <a href="#contact" className=" hover:underline hover:cursor-pointer hover:text-red-200 transition-colors duration-300 underline-offset-2">Contact</a>
                </ul>
            </nav>

            {/* Mobile drop-down menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-slate-700 shadow-xl">
                    <ul className="flex flex-col px-8 py-6 gap-6 text-lg">
                        <a href="#" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#skill" onClick={() => setIsOpen(false)}>Skill</a>
                        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    </ul>
                </div>
            )}

        </header>
    );
};

export default Navbar;