import React from "react";

const Skill = () => {
    const languages = ["TypeScript", "Python", "JavaScript", "Java", "C++"];
    const frameworks = ["Next.js", "React.js", "Express.js", "Node.js", "TailwindCSS"];
    const databases = ["PostgreSQL", "MongoDB", "MySQL"];
    const tools = ["Git & Github", "Linux", "AWS", "VS Code", "Postman"];
    return (
        <section id="skill" className="max-w-5xl mx-auto px-4 py-32 border-b border-slate-700" data-aos="fade-down">
            <h2 className="text-4xl font-bold text-center mb-8">Tech Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-start sm:justify-items-start md:justify-items-center">
                {/* col 1: Langauges */}
                <div className="w-full max-w-[200px]">
                    <h3 className="text-3xl font-semibold mb-4 text-sky-500">Languages</h3>
                    <ul className="list-disc list-inside text-2xl space-y-3 text-slate-200 marker:text-blue-500">
                        {languages.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
                {/* col 2: Frameworks */}
                <div className="w-full max-w-[200px]">
                    <h3 className="text-3xl font-semibold mb-4 text-sky-500">Frameworks</h3>
                    <ul className="list-disc list-inside text-2xl space-y-3 text-slate-200 marker:text-blue-500">
                        {frameworks.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
                {/* col 3: databases */}
                <div className="w-full max-w-[200px]">
                    <h3 className="text-3xl font-semibold mb-4 text-sky-500">Databases</h3>
                    <ul className="list-disc list-inside text-2xl space-y-3 text-slate-200 marker:text-blue-500">
                        {databases.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
                {/* col 1: Tools*/}
                <div className="w-full max-w-[200px]">
                    <h3 className="text-3xl font-semibold mb-4 text-sky-500">Tools</h3>
                    <ul className="list-disc list-inside text-2xl space-y-3 text-slate-200 marker:text-blue-500">
                        {tools.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skill;