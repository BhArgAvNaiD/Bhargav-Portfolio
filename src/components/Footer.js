import React from "react";

const Footer = () => {
  return (
    <div className="bg-white border-2 border-ind font-semibold rounded-tl-full font-varela text-center rounded-tr-full  mt-10">
      <div className="container mx-auto py-20 space-y-5">
        <p className="text-2xl ">
          Developed by{" "}
          <span className="cursor-pointer inline bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-400 bg-clip-text font-display tracking-tight text-transparent ">
            Marada Bhargav Naidu
          </span>
        </p>
        <p className="text-xl">Stay Connected</p>
        <div className="md:text-4xl space-x-5 text-2xl cursor-pointer inline bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-400 bg-clip-text font-display tracking-tight text-transparent">
          <a href="https://github.com/maradabhargavnaidu">
            <i className="devicon-github-original"></i>
          </a>
          <a href="https://www.linkedin.com/in/bhargav-naidu">
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a href="https://twitter.com/maradabhargav">
            <i className="devicon-twitter-original"></i>
          </a>
        </div>
        <p>maradabhargavnaidu &copy; 2024</p>
      </div>
    </div>
  );
};

export default Footer;
