// Techstack.jsx
import React from "react";
import { techStack } from "./tech";

const Section = ({ title, items }) => (
    <div className="mb-16">
        <h2 className="text-2xl font-bold text-purple mb-6">{title}</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {(items || []).map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-r from-[#04071D] to-[#0C0E23] border border-slate-700 shadow-md hover:scale-105 transition-transform"
                >
                    <img src={item.icon} alt={item.name} className="w-10 h-10 mb-2" />
                    <p className="text-white text-sm font-medium">{item.name}</p>
                </div>
            ))}
        </div>
    </div>
);

const Techstack = () => {
    return (
        <section id="Techstack">

            <div className="py-20 w-full">
                <h1 className="heading mb-12 text-center">
                    My <span className="text-purple">Technical Skills</span>
                </h1>
                <Section title="Languages" items={techStack.languages} />
                <Section title="Frameworks" items={techStack.frameworks} />
                <Section title="Web Development" items={techStack.webTechnologies} />
                <Section title="Databases" items={techStack.databases} />
                <Section title="Cloud Platforms" items={techStack.cloudPlatforms} />
                <Section title="Tools & Analytics" items={techStack.tools} />
                <Section title="AI / ML" items={techStack.aiML} />
            </div>
        </section>
    );
};

export default Techstack;
