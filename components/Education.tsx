import React from "react";
import { Button } from "./ui/MovingBorders";

const Education = () => {
    const education = [
        {
            id: 1,
            thumbnail: "https://skct.edu.in/skct-quiz/cn3.png", // replace with your image
            title: "Sri Krishna College of Engineering and Technology (SKCET)",
            desc: "B.TECH  Artificial Intelligence and Data Science • CGPA: 7.94 • Final Year Student (2022–2026)",
        },
        {
            id: 2,
            thumbnail: "https://i.ytimg.com/vi/zm_xZCYaNj8/maxresdefault.jpg", // replace with your image
            title: "Higher Secondary Education",
            desc: "Completed Class XII with strong foundation in Computer Science  • Percentage : 78%   • 2021-2022",
        },
        {
            id: 3,
            thumbnail: "https://i.ytimg.com/vi/zm_xZCYaNj8/maxresdefault.jpg", // replace with your image
            title: "Senior Secondary Education",
            desc: "Completed Class X with strong foundation in Maths,Science • Percentage : 61.4%   • 2020-2021",
        },
    ];

    return (
        <div className="py-20 w-full">
            <h1 className="heading">
                My <span className="text-purple">Education</span>
            </h1>

            <div className="w-full mt-12 flex flex-col gap-10">
                {education.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <img
                                src={card.thumbnail}
                                alt={card.title}
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Education;
