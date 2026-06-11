import React from "react";

// Footer

const Footer = () => {
    return (
        <footer className="bg-slate-800 py-12" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/*Portfolio info  */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">JOEL MOGENDI</h3>
                        <p className="text-sky-200"> Full-Stack Software Engineer</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <p className="mb-2"><a href="tel:+254741656078" className="hover:text-red-200">+254741656078</a></p>
                        <p className="mb-2"><a href="https://wa.me/+254741656078" target="_blank" rel="noopener" className="hover:text-red-200">Whatsapp</a></p>
                        <p className="mb-2"><a href="mailto:joelmogendi1@gmail.com" className="hover:text-red-200">joelmogendi1@gmail.com</a></p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <p className="mb-2"><a href="https://github.com/joelmogendi" target="_blank" rel="noopener" className="hover:text-red-200">Github</a></p>
                        <p className="mb-2"><a href="https://www.linkedin.com/in/joel-mogendi-83a447330" target="_blank" rel="noopener" className="hover:text-red-200">LinkedIn</a></p>
                        <p className="mb-2"><a href="https://www.reddit.com/user/Joel_Mogz/" target="_blank" rel="noopener" className="hover:text-red-200">Reddit</a></p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-red-200 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-red-200 transition-colors">About</a></li>
                            <li><a href="#skill" className="hover:text-red-200 transition-colors">Skill</a>
                            </li>
                            <li><a href="#contact" className="hover:text-red-200 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;