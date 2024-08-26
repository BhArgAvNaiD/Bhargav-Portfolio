import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function Projects() {
  return (
    <div className="bg-indigo-600">
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
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-white opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-36">
        <div className="text-center font-bold text-4xl underline text-white">
          PROJECTS
        </div>
        <div className="flex justify-between flex-wrap mt-16">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              {/* <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          /> */}
              <div className="flex flex-col">
                <p className="text-md font-semibold">COLLEGE PORTAL</p>
                <p className="text-small text-default-500">
                  cllgportal.netlify.app
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                College Portal is an all-in-one college management system
                designed to help educational institutions efficiently track
                admissions and manage expenses. With College Portal, colleges
                can easily monitor their monthly and yearly expenses, ensuring
                better financial management and streamlined operations.
              </p>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-between">
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/maradabhargavnaidu/nextui"
              >
                GitHub.
              </Link>
              <Link
                isExternal
                showAnchorIcon
                href="https://yaatra.onrender.com/"
              >
                Live.
              </Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              {/* <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          /> */}
              <div className="flex flex-col">
                <p className="text-md font-semibold">YAATRA</p>
                <p className="text-small text-default-500">
                  yaatra.onrender.com
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Yaatra is a premier trip planning website that allows users to
                plan their trips based on their interests. Whether you're
                looking for information about famous tourist attractions or need
                expert guides, Yaatra has you covered.
              </p>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-between">
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/maradabhargavnaidu/nextui"
              >
                GitHub.
              </Link>
              <Link
                isExternal
                showAnchorIcon
                href="https://yaatra.onrender.com/"
              >
                Live.
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
