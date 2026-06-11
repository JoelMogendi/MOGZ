"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // How long the animation takes (in ms)
            once: true,    // Whether animation should happen only once while scrolling down
            offset: 100,   // Offset (in px) from the original trigger point
            easing: 'ease-in-out',
        });
    }, []);

    return null;
};