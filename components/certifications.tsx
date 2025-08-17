import React from "react";
import { Button } from "./ui/MovingBorders";

type Certification = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    link: string;
};

export const CertificationsContainer = () => {
    const certifications: Certification[] = [
        {
            id: 1,
            title: "AWS Academy Graduate",
            subtitle: "Amazon Web Services",
            image: "AWS.png",
            link: "https://www.credly.com/users/logesh-s.77a7b94d/edit#credly",
        },
        {
            id: 2,
            title: "Build a Secure Google Cloud Network Skill Badge",
            subtitle: "Google Cloud Platform",
            image: "GCP.png",
            link: "https://www.credly.com/users/logesh-s.77a7b94d",
        },
        {
            id: 3,
            title: "Google Cloud Computing Foundations Certificate",
            subtitle: "Google Cloud Platform",
            image: "GCP1.png",
            link: "https://www.credly.com/earner/earned/share/9ccd5b2a-de48-4fc0-a486-57339d680dd9",
        },
        {
            id: 4,
            title: "Python Essentials 1",
            subtitle: "CISCO Networking Academy",
            image: "python1.png",
            link: "https://www.credly.com/earner/earned/share/14b8b40d-2d5e-40b8-9e6e-b24c9d1c3992",
        },
        {
            id: 5,
            title: "Python Essentials 2",
            subtitle: "Cisco Networking Academy",
            image: "python2.png",
            link: "https://www.credly.com/earner/earned/share/6cd2eef5-d459-4bff-8b6b-daf5c06e7091",
        },
        {
            id: 6,
            title: "Java ",
            subtitle: "Infosys Springboard",
            image: "Java.png",
            link: "https://www.example.com/cert/docker",
        },
        {
            id: 7,
            title: "Infosys Vritual Internship 6.0",
            subtitle: "Infosys",
            image: "infosysintern.png",
            link: "#",
        },
        {
            id: 8,
            title: "Guvi Hackathon 2024",
            subtitle: "Guvi",
            image: "image.png",
            link: "#",
        },
    ];

    return (
        <div className="py-20 w-full">
            <h1 className="heading">
                My <span className="text-purple">Certifications</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
                {certifications.map((cert) => (
                    <Button
                        key={cert.id}
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
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 w-full"
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                                    {cert.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {cert.subtitle}
                                </p>
                            </div>
                        </a>
                    </Button>
                ))}
            </div>
        </div>
    );
};
