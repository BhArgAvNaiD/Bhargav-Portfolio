import React from "react";

const TechStack = () => {
  return (
    <div className="bg-indigo-600 scroll-smooth" id="Skills">
      <div className="relative isolate px-6 lg:px-8">
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-white opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div> */}
        <div className="py-32">
          <div className="max-w-4xl px-2 mx-auto">
            <div className="text-white py-10 text-2xl">
              <div className="flex flex-wrap gap-10 justify-start items-start">
                <p className="font-bold text-white mb-5 text-center text-3xl sm:text-4xl underline w-full">
                  TECH STACK
                </p>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4 rounded-md bg-white">
                    <i className="devicon-html5-plain colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    HTML5
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4 rounded-md bg-white">
                    <i className="devicon-css3-plain colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    CSS3
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4 rounded-md bg-white">
                    <i className="devicon-javascript-plain colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    JavaScript
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4 rounded-md bg-white">
                    <i className="devicon-c-line colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    C
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4 rounded-md bg-white">
                    <i className="devicon-java-plain colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    Java
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4 rounded-md bg-white">
                    <i className="devicon-python-plain colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    Python
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4 rounded-md bg-white">
                    <i className="devicon-react-original colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    React
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4 rounded-md bg-white">
                    <i className="devicon-nodejs-plain colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    Node.js
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4 rounded-md bg-white">
                    <i className="devicon-bootstrap-plain colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    Bootstrap
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4 rounded-md bg-white">
                    <i className="devicon-tailwindcss-plain colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4  rounded-md bg-white">
                    <i className="devicon-mongodb-plain colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    MongoDB
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4  rounded-md bg-white">
                    <i className="devicon-mysql-plain-wordmark colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    MySQL
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 sm:p-4 rounded-md bg-white">
                    <i className="devicon-firebase-plain colored text-6xl"></i>
                  </div>
                  <span className="mt-2 text-[16px] sm:text-[20px] font-semibold">
                    Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
