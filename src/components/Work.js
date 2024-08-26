import React from "react";

const Work = () => {
  return (
    <div className="bg-white" id="Work">
      <div className="relative isolate px-1 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className=" scroll-smooth py-28" id="Work">
          <div className="container mx-auto max-w-4xl px-5">
            <p className=" text-black font-bold text-3xl sm:text-4xl underline text-center mb-5">
              WORK
            </p>
            <div className="space-y-5 py-8 text-left">
              <p className="relative z-10 text-3xl sm:text-4xl text-black  font-semibold">
                SkyGoal Innova Technologies Pvt Ltd
              </p>
              <div>
                <p className="relative z-10 text-2xl sm:text-3xl text-black font-semibold">
                  Web Developer Intern
                </p>
                <p className="relative z-10 text-lg sm:text-xl text-black  font-light">
                  Mar.2023 - Jun.2023
                </p>
              </div>

              <ul className="text-left list-disc marker:text-gray-600">
                <li className="mt-6 text-md sm:text-lg leading-8 font-semibold text-gray-600">
                  Sky Goal is an India-based Global Edtech platform that helps
                  students seeking admissions to institutions simply.
                </li>
                <li className="mt-6 text-md sm:text-lg leading-8 font-semibold text-gray-600">
                  Engineered the Sky Goal Ambassador website utilizing the React
                  framework based on Figma designs, optimized API calls through
                  Axios, improving data retrieval speed by 40% and enriching
                  user interaction through Bootstrap styling.
                </li>
                <li className="mt-6 text-md sm:text-lg leading-8 font-semibold text-gray-600">
                  Constructed the Sky Goal Ambassador Admin Panel using React
                  and TailwindCSS for efficient component styling. Streamlined
                  the administrative workflow, enabling the team to manage data
                  for over 1000+ ambassadors seamlessly.
                </li>
                <li className="mt-6 text-md sm:text-lg leading-8 font-semibold text-gray-600">
                  Designed and implemented a REST API using Node. js and
                  MongoDB, resulting in a streamlined data exchange process that
                  improved application response time by 40% and supported
                  real-time updates across multiple platforms.
                </li>
                <li className="mt-6 text-md sm:text-lg leading-8 font-semibold text-gray-600">
                  Spearheaded a rigorous code review process that ensured
                  adherence to coding standards and resulted in a 30% reduction
                  in post-deployment issues.maintained documentation for 100% of
                  code changes to facilitate future troubleshooting.
                </li>
                <li className="mt-6 text-md sm:text-lg font-semibold leading-8 text-gray-600">
                  I Developed a robust frontend for multiple web applications,
                  leveraging Firebase functionalities,resulting in seamless user
                  experiences that are now utilized by more than 100 active
                  users monthly.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
