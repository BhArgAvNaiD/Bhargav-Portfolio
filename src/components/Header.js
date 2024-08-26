import { useState } from "react";
// import { Link } from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function Example() {
  return (
    <div className="bg-white scroll-smooth" id="Home">
      <div className="relative isolate px-6 lg:px-8">
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
        <div className="mx-auto max-w-4xl py-20 sm:py-44">
          <div className="hidden sm:mb-5 sm:flex sm:justify-center">
            {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>
          <div className="text-left">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
              Hey !
            </h1>
            <h1 className="text-4xl sm:text-6xl mt-3 font-bold tracking-tight text-gray-900">
              I'm Bhargav Naidu
            </h1>
            <h1 className="sm:text-6xl bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-400 bg-clip-text font-display text-4xl tracking-tight text-transparent mt-3 font-bold">
              Full-Stack Developer
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I am a Full Stack Web Developer with experience as a Web Developer
              Intern at SkyGoal Innova Technologies Pvt Ltd. Currently, I am
              focused on mastering Data Structures and Algorithms, having solved
              over 650 problems on LeetCode with a contest rating of 1596.
            </p>
            <div className="mt-10 flex gap-x-6">
              <a
                href="https://drive.google.com/file/d/1wnyEEi4Rx0xE53GzoviWG6U7Fyap7hhK/view?usp=sharing"
                className="rounded-md bg-indigo-600 px-3.5 cursor-pointer py-2.5 text-sm font-semibold text-white "
              >
                My Resume
              </a>
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
}
