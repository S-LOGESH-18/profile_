import React from "react";
import { Button } from "./ui/MovingBorders";

const Grid = () => {
  return (
    <section id="about" className="w-full py-20">
      <h1 className="heading mb-12 text-center">
        <span className="text-purple">About</span> Me
      </h1>

      <div className="container mx-auto flex justify-center">
        <Button
          duration={12000}
          borderRadius="1.75rem"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="w-full max-w-6xl border-neutral-200 dark:border-slate-800"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start p-8 md:p-14 gap-12">

            {/* Left: Profile Photo */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-gray-500">
                <img
                  src="Profile.jpg" // keep in public folder
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: About Me */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              {/* Name */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-purple mb-6">
                Logesh S
              </h2>

              {/* About Me */}
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
                I am a final-year student at <b>SKCET</b> with a CGPA of <b>7.94</b>, passionate about
                technology and innovation. As an aspiring <b>AI/ML Engineer</b> and <b>Data Scientist</b>,
                <b> FullStack Developer </b>. I have built a strong foundation in developing intelligent
                systems and working with
                real-world data. I am deeply interested in transforming raw data into <i>meaningful insights</i>
                and <i>impactful solutions</i> that drive progress. Challenges inspire me, and I constantly
                seek opportunities to learn, grow, and refine my skills. Beyond academics, I stay curious,
                explore emerging technologies, and strive to create solutions that blend creativity
                with scalability.
              </p>

            </div>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default Grid;
