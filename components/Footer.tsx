import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        {/* Contact Info Container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 my-6">
          {/* Phone */}
          <a
            href="tel:+917810008757"
            className="flex items-center gap-3 px-5 py-3 rounded-lg border border-black-300 backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-50 hover:bg-opacity-70 transition duration-300 cursor-pointer"
          >
            <FaPhoneAlt className="text-purple text-lg" />
            <span className="text-white">+91 7810008757</span>
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=logesh.s0409@gmail.com"
            className="flex items-center gap-3 px-5 py-3 rounded-lg border border-black-300 backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-50 hover:bg-opacity-70 transition duration-300 cursor-pointer"
          >
            <FaEnvelope className="text-purple text-lg" />
            <span className="text-white">logesh.s0409@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/logesh-s-106613258/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-lg border border-black-300 backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-50 hover:bg-opacity-70 transition duration-300 cursor-pointer"
          >
            <FaLinkedin className="text-purple text-lg" />
            <span className="text-white">LinkedIn Profile</span>
          </a>
          <a
            href="https://github.com/S-LOGESH-18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-lg border border-black-300 backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-50 hover:bg-opacity-70 transition duration-300 cursor-pointer"
          >
            <FaGithub className="text-purple text-lg" />
            <span className="text-white">GitHub Profile</span>
          </a>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=logesh.s0409@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

      </div>

      {/* Footer bottom */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          Copyright © 2024 Logesh
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center 
                 backdrop-filter backdrop-blur-lg saturate-180 
                 bg-black-200 bg-opacity-75 rounded-lg border border-black-300
                 hover:bg-opacity-100 transition"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
