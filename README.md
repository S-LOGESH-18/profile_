<div align="center">
  <br />
    <a href="https://youtu.be/FTH6Dn3AyIQ" target="_blank">
      <img src="https://github.com/adrianhajdin/portfolio/assets/151519281/c6ca3c03-6cb7-4f67-a9b9-a73da5bfa0d8" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Framer-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF" alt="framer" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A Modern Next.js Portfolio</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Code to Copy](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>. 

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://youtu.be/FTH6Dn3AyIQ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

Built with Next.js for handling the user interface, Three.js for rendering 3D elements, Framer motion for beautiful animations, and styled with TailwindCSS, this portfolio demonstrates the developer's skills in a unique manner that creates a lasting impact.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **34k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Three.js
- Framer Motion
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Hero**: Captivating introduction featuring a spotlight effect and dynamic background.

👉 **Bento Grid**: Modern layout presenting personal information using cutting-edge CSS design techniques.

👉 **3D Elements**:  Interactive 3D design elements, such as a GitHub-style globe and card hover effects, adding depth and engagement.

👉 **Testimonials**: Dynamic testimonials area with scrolling or animated content for enhanced engagement.

👉 **Work Experience**: Prominent display of professional background for emphasis and credibility.

👉 **Canvas Effect**: Innovative use of HTML5 canvas to create visually striking effects in the "approaches" section.

👉 **Responsiveness**: Seamless adaptability across all devices, ensuring optimal viewing experience for every user.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/portfolio.git
cd portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>data/index.ts</code></summary>

```typescript
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Techstack", link: "#Techstack" },
  { name: "Achievements", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const projects = [
  {
    id: 1,
    title: "AI Smart Home Tutoring for Children",
    des: "Transforming educational concepts into seamless AI-powered learning experiences...",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    // names → ids
    iconLists: [14, 10, 5, 13, 18, 22], 
  },
  {
    id: 2,
    title: "Toy Store Shopping Portal",
    des: "Transforming e-commerce concepts into seamless shopping experiences...",
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
    iconLists: [14, 6, 17, 18, 10],
  },
  {
    id: 3,
    title: "Real-time Sign Language Converter",
    des: "Transforming communication concepts into seamless accessibility experiences...",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    iconLists: [3, 9],
  },
  {
    id: 4,
    title: "Safety Eye AI",
    des: "Transforming safety concepts into seamless monitoring experiences...",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    iconLists: [9, 3, 11],
  },
  {
    id: 5,
    title: "AI HyperBuilder AGENT",
    des: "Transforming planning concepts into seamless productivity experiences...",
    img: "https://tse3.mm.bing.net/th/id/OIP.c_DSAFifx1BYuibmSyWGvQHaEK?pid=Api&P=0&h=180",
    iconLists: [14, 12, 13, 20],
  },
  {
    id: 6,
    title: "Food Ordering Portal",
    des: "Transforming food delivery concepts into seamless ordering experiences...",
    img: "https://foodapp.fi/introsite/images/banner-slide3.png",
    iconLists: [14, 4, 18],
  },
];



export const testimonials = [
  {
    quote:
      "Rajasthan Police Hackathon 1.0 - Project: Police Feedback Portal. We developed a feedback portal for police to collect real-time feedback, enhancing community-police communication and service improvement.",
    name: "Hackathon Finalist",
    title: "Rajasthan Police Hackathon 1.0 - 15/01/2024",
    logo: "https://3.bp.blogspot.com/-4QYges-aqlo/W2A2rxh1baI/AAAAAAAAAE0/iuWkkrutK9kVR8E6katWur432ewcOudkACLcBGAs/s1600/rajasthan-police-logo.jpg",
  },
  {
    quote:
      "GUVI AU-TN-CPL - Project: AI Smart Tutoring for Children. Created an intelligent AI-powered tutoring system designed specifically for children, providing personalized learning experiences.",
    name: "Hackathon Winner",
    title: "GUVI AU-TN-CPL - 13/04/2024",
    logo: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_b2b52bf26a769b861fae19c5f65643cf/guvi.png",
  },
  {
    quote:
      "IEEE SSH 2024 - Project: Sign Language Converter. We created a portal to convert sign language to alphabets and also developed a dashboard for tracking and monitoring communication progress.",
    name: "Hackathon Finalist",
    title: "IEEE SSH 2024 - 22/11/2024",
    logo: "https://clipground.com/images/ieee-logo-png-7.png",
  },
  {
  quote:
    "CDW Workshop STEP 2024 - We participated in an Martering in React and Redux Art workshop where we showcased innovative solutions and won the Best Interactive Award.",
  name: "Best Interactive Award",
  title: "CDW Workshop STEP 2024 - Nov 2024",
  logo: "CDW.jpg",
},
];
export const companies = [
  {
    id: 1,
    name: "snowflake",
    img: "https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Emblem.png",
    nameImg: "https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Emblem.png",
  },
  {
    id: 2,
    name: "AWS",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*b_al7C5p26tbZG4sy-CWqw.png",
    nameImg: "https://miro.medium.com/v2/resize:fit:1400/1*b_al7C5p26tbZG4sy-CWqw.png",
  },
  {
    id: 3,
    name: "GCP",
    img: "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Symbol-700x394.png",
    nameImg: "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Symbol-700x394.png",
  },
  {
    id: 4,
    name: "powerbi",
    img: "https://s.yimg.com/fz/api/res/1.2/SIJhJ_jHjD5nzs0pXCN6kA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjYw/https://s.yimg.com/zb/imgv1/9949534e-fe00-3fc4-8c73-20afcae8a325/t_500x300",
    nameImg: "https://s.yimg.com/fz/api/res/1.2/SIJhJ_jHjD5nzs0pXCN6kA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjYw/https://s.yimg.com/zb/imgv1/9949534e-fe00-3fc4-8c73-20afcae8a325/t_500x300",
  },
  {
    id: 5,
    name: "hugging face",
    img: "https://www.amd.com/content/dam/amd/en/images/logos/partners/2058250-hugging-face-logo.png",
    nameImg: "https://www.amd.com/content/dam/amd/en/images/logos/partners/2058250-hugging-face-logo.png",
  },
  {
    id: 6,
    name: "ollama",
    img: "https://vectorseek.com/wp-content/uploads/2025/02/Ollama-Logo-SVG-PNG-Vector.png",
    nameImg: "https://vectorseek.com/wp-content/uploads/2025/02/Ollama-Logo-SVG-PNG-Vector.png",
  },
  {
    id: 7,
    name: "react",
    img: "https://tactless7.github.io/cv/img/icons/react_logo_2.png",
    nameImg: "https://tactless7.github.io/cv/img/icons/react_logo_2.png",
  },
  {
    id: 8,
    name: "PowerBI",
    img: "https://1.bp.blogspot.com/-bJapstoiThM/XtpvkGBHPKI/AAAAAAAAAqE/Ume0qNfFwk0JSwXZ9qjnB3WKN9dSofeCgCK4BGAsYHg/s1280/language-2024210_1280.png",
    nameImg: "https://1.bp.blogspot.com/-bJapstoiThM/XtpvkGBHPKI/AAAAAAAAAqE/Ume0qNfFwk0JSwXZ9qjnB3WKN9dSofeCgCK4BGAsYHg/s1280/language-2024210_1280.png",
  },
  {
    id: 9,
    name: "mysql",
    img: "https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png",
    nameImg: "https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png",
  },
  {
    id: 10,
    name: "firebase",
    img: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
    nameImg: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
  },
];

export const roles = [
  {
    id: 1,
    title: "AI/ML Engineer",
    desc: "Specialized in developing machine learning models, neural networks, and AI-powered applications using Python, TensorFlow, PyTorch, and scikit-learn.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Scientist",
    desc: "Expert in data analysis, statistical modeling, predictive analytics, and creating data-driven insights using Python, R, SQL, and advanced analytics tools.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer",
    desc: "Skilled in building responsive, interactive user interfaces using React, Next.js, TypeScript, Tailwind CSS, and modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    desc: "Comprehensive development expertise covering frontend, backend, databases, and deployment using MERN stack, Next.js, and cloud technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
export const techStack = {
  languages: [
    { id: 1, name: "C++", icon: "/icons/cpp.svg" },
    { id: 2, name: "Java", icon: "/icons/java.svg" },
    { id: 3, name: "Python", icon: "/icons/python.svg" },
    { id: 4, name: "R", icon: "/icons/r.svg" },
  ],
  frameworks: [
    { id: 1, name: "Spring Boot", icon: "/icons/springboot.svg" },
    { id: 2, name: "Flask", icon: "/icons/flask.svg" },
    { id: 3, name: "Django", icon: "/icons/django.svg" },
    { id: 4, name: "Firebase", icon: "/icons/firebase.svg" },
  ],
  web: [
    { id: 1, name: "React.js", icon: "/icons/react.svg" },
    { id: 2, name: "HTML5", icon: "/icons/html.svg" },
    { id: 3, name: "CSS3", icon: "/icons/css.svg" },
    { id: 4, name: "JavaScript", icon: "/icons/javascript.svg" },
    { id: 5, name: "TypeScript", icon: "/icons/typescript.svg" },
  ],
  databases: [
    { id: 1, name: "MySQL", icon: "/icons/mysql.svg" },
    { id: 2, name: "MongoDB", icon: "/icons/mongodb.svg" },
    { id: 3, name: "DBMS", icon: "/icons/dbms.svg" },
  ],
  cloud: [
    { id: 1, name: "AWS", icon: "/icons/aws.svg" },
    { id: 2, name: "GCP", icon: "/icons/gcp.svg" },
  ],
  tools: [
    { id: 1, name: "Excel", icon: "/icons/excel.svg" },
    { id: 2, name: "Power BI", icon: "/icons/powerbi.svg" },
    { id: 3, name: "Snowflake", icon: "/icons/snowflake.svg" },
    { id: 4, name: "Informatica", icon: "/icons/informatica.svg" },
    { id: 5, name: "RapidMiner", icon: "/icons/rapidminer.svg" },
  ],
  ai_ml: [
    { id: 1, name: "Scikit-Learn", icon: "/icons/scikit.svg" },
    { id: 2, name: "TensorFlow", icon: "/icons/tensorflow.svg" },
    { id: 3, name: "PyTorch", icon: "/icons/pytorch.svg" },
    { id: 4, name: "Hugging Face", icon: "/icons/huggingface.svg" },
    { id: 5, name: "GAN / CNN / RNN", icon: "/icons/ai.svg" },
    { id: 6, name: "RAG", icon: "/icons/rag.svg" },
    { id: 7, name: "Ollama", icon: "/icons/ollama.svg" },
  ],
  dsa: [
    { id: 1, name: "Data Structures", icon: "/icons/dsa.svg" },
    { id: 2, name: "Algorithms", icon: "/icons/algo.svg" },
  ],
};
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/yourusername", // GitHub link
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com/yourhandle", // Twitter link
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/logesh-s-106613258/", // LinkedIn link
  },
];

```s

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```ts
import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;

    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border !scroll-smooth;
  }
  body {
    @apply bg-background text-foreground;
  }
  button {
    @apply active:outline-none;
  }
}

@layer utilities {
  .heading {
    @apply font-bold text-4xl md:text-5xl text-center;
  }

  .black-gradient {
    background: linear-gradient(90deg, #161a31 0%, #06091f 100%);
  }
}
```

</details>


<details>
<summary><code>Linear Gradient</code></summary>

```js
style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
```
</details>


## <a name="links">🔗 Assets</a>

Assets used in the project can be found [here](https://drive.google.com/file/d/1ZmtiMilUYTp1wkiXWMFX6AUk-msE981-/view?usp=sharing)

## <a name="more">🚀 More</a>
**Advance your skills with Next.js Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning experience. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://www.jsmastery.pro/ultimate-next-course" target="_blank">
<img src="https://i.ibb.co/804sPK6/Image-720.png" alt="Project Banner">
</a>
