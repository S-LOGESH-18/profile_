"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { techStack } from "./tech";
// allTech.js

export const allTech = [
  // Languages
  { id: 1, name: "C++", icon: "https://i.redd.it/nmuax05zxoab1.gif" },
  { id: 2, name: "Java", icon: "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png" },
  { id: 3, name: "Python", icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },

  // Frameworks
  { id: 4, name: "Spring Boot", icon: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" },
  { id: 5, name: "Flask", icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },
  { id: 6, name: "Django", icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },
  { id: 7, name: "Firebase", icon: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png" },

  // AI / ML
  { id: 8, name: "Scikit-Learn", icon: "https://numfocus.org/wp-content/uploads/2017/11/scikitlearn-logo-300.png" },
  { id: 9, name: "TensorFlow", icon: "https://www.nxp.com/assets/images/en/logos-external/TensorFlow-Logo-ML.png" },
  { id: 10, name: "Hugging Face", icon: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png" },
  { id: 11, name: "GAN / CNN / RNN", icon: "https://cdn-icons-png.freepik.com/512/8618/8618881.png" },
  { id: 12, name: "RAG", icon: "https://static.vecteezy.com/system/resources/previews/031/468/506/original/rag-creative-icon-design-free-vector.jpg" },
  { id: 13, name: "Ollama", icon: "https://images.seeklogo.com/logo-png/59/1/ollama-logo-png_seeklogo-593420.png" },

  // Web
  { id: 14, name: "React.js", icon: "https://shopify.github.io/react-native-skia/img/logo.png" },
  { id: 15, name: "HTML5", icon: "https://www.freeiconspng.com/thumbs/html5-icon/html5-icon-1.png" },
  { id: 16, name: "CSS3", icon: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" },
  { id: 17, name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" },

  // Databases
  { id: 18, name: "MySQL", icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-mysql-9294870-7578013.png" },
  { id: 19, name: "MongoDB", icon: "https://tse1.mm.bing.net/th/id/OIP.DiNIG4Bfpm65_wwXf_JwMAHaHa?pid=Api&P=0&h=180" },

  // Cloud
  { id: 20, name: "AWS", icon: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Web-Services-AWS-Logo-Background-PNG-Image.png" },
  { id: 21, name: "GCP", icon: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/google-cloud-platform-gcp-small-square%20thumbnail.png" },

  // Tools
  { id: 22, name: "Excel", icon: "https://static.vecteezy.com/system/resources/previews/022/100/783/non_2x/microsoft-excel-logo-transparent-free-png.png" },
  { id: 23, name: "Power BI", icon: "https://s.yimg.com/fz/api/res/1.2/SIJhJ_jHjD5nzs0pXCN6kA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjYw/https://s.yimg.com/zb/imgv1/9949534e-fe00-3fc4-8c73-20afcae8a325/t_500x300" },
  { id: 24, name: "Snowflake", icon: "https://tse2.mm.bing.net/th/id/OIP.oaFmQe0_unoNe-nXArAi9wHaHY?pid=Api&P=0&h=180" },
  { id: 25, name: "Informatica", icon: "https://companieslogo.com/img/orig/INFA-c4767c1c.png?t=1720244492" },
  { id: 26, name: "RapidMiner", icon: "https://www.aitimejournal.com/wp-content/uploads/2022/08/repidminer-2d3ca120e0fd6d3601870dd600e5825c.jpg" },
];


const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        {/* Heading */}
        <h1 className="heading text-center">
          <span className="text-purple">My Projects</span>
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 px-6">
          {projects.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-start sm:w-96 w-[80vw] transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 rounded-3xl"
            >
              <PinContainer
                title="Projects"
                href="https://github.com/S-LOGESH-18"
              >
                {/* Image Section */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[28vh] mb-6 rounded-2xl group bg-[#13162D]">
                  {/* Background */}
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                  />
                  {/* Foreground (Project Image) */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base mb-2">
                  {item.title}
                </h1>

                {/* Description */}
                <p
                  className="lg:text-lg md:text-base text-sm font-light"
                  style={{ color: "#BEC1DD" }}
                >
                  {item.des}
                </p>

              </PinContainer>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
