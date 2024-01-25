"use client";

import Image from "next/image";
import localFont from "next/font/local";

const gellix11 = localFont({ src: "../fonts/gellix-11.ttf" });
const gellix13 = localFont({ src: "../fonts/gellix-13.ttf" });
const mattermedium = localFont({ src: "../fonts/Matter-Medium.ttf" });

export default function Home() {
  return (
    <main
      style={gellix11.style}
      className="main min-h-screen text-xl overflow-hidden"
    >
      <nav className=" max-w-7xl m-auto pt-8 flex align-middle text-center items-center justify-between">
        <div className="text-2xl  pl-4 md:p-0 ">
          Gbadebo <span className="text-lightgreen">Oluwarimi</span>
        </div>

        <ul
          className="justify-between hidden md:flex text-sm overflow-hidden w-1/3 "
          style={gellix11.style}
        >
          <li>About me </li>
          <li>Experience</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <button style={gellix11.style} className="text-sm p-3 ">
          Resume
        </button>
      </nav>

      <div className="inline-block md:flex max-w-7xl m-auto sm:pl-4">
        <div className="pt-24 ">
          <div className="pb-6 text-center md:text-left text-sm text-gray2">
            Hi, My name is Rimi
            <div className="   w-20 h-1 bg-lightgreen mt-2"></div>
          </div>
          <div
            className="text-center md:text-left text-3xl md:text-5xl"
            style={gellix13.style}
          >
            Software Engineer, Network <br />
            <span className="text-lightgreen">Architect</span> & System
            Maintainer
          </div>
          <div
            className="pt-8 max-w-xl text-center  pb-5 lg:pl-0 md:text-left text-sm text-gray2"
            style={gellix11.style}
          >
            Im a software engineer specializing in building and occasionally
            designing exceptional digital experiences. Currently, Im focused on
            building accessible, human-centered products at {""}
            <a href="https://picotelnigeria.com" className="text-lightgreen">
              Picotel Nigeria
            </a>
            .
          </div>
          <div className="pt-14 flex justify-center  md:inline">
            <button className="text-sm p-3 border-lightgreen border rounded-sm text-lightgreen">
              Download Resume
            </button>
          </div>
        </div>
        <div className="pt-20">
          {/* <div className="px-20">
            <Image src="./block.svg" width={350} height={350} />
          </div> */}
        </div>
      </div>
      <div className="pt-10 text-center items-center ">
        <div className="text-sm pb-5 text-lightgreen">
          Technologies I Frequently Use
          <br />
          <line className="w-20 h-20 bg-lightgreen "></line>
        </div>
        <ul class=" hidden px-8 md:flex flex-wrap items-center justify-between max-w-4xl m-auto ">
          <li>
            <Image
              src="/docker.png"
              width={40}
              height={40}
              className="grayscale hover:grayscale-0 transition ease-in-out delay-150"
            />
          </li>
          <li>
            <Image
              src="/graphql.png"
              width={40}
              height={40}
              className="grayscale hover:grayscale-0 transition ease-in-out delay-150"
            />
          </li>
          <li>
            <Image
              src="/react2.png"
              width={40}
              height={40}
              className="grayscale hover:grayscale-0 transition ease-in-out delay-150"
            />
          </li>
          <li>
            <Image
              src="/jenkins.png"
              width={30}
              height={30}
              className="grayscale hover:grayscale-0 transition ease-in-out delay-150"
            />
          </li>
          <li>
            <Image src="/express2.png" width={40} height={40} className="" />
          </li>
          <li>
            <Image
              src="/tailwindcss.png"
              width={40}
              height={40}
              className="grayscale hover:grayscale-0 transition ease-in-out delay-150"
            />
          </li>
          <li>
            <Image
              src="/aws1.png"
              width={40}
              height={40}
              className="grayscale hover:grayscale-0 transition ease-in-out delay-150"
            />
          </li>
          <li>
            <Image
              src="/Nextjs.png"
              width={40}
              height={40}
              className="grayscale hover:grayscale-0 transition ease-in-out delay-150"
            />
          </li>
          <li>
            <Image
              src="/mongodb.png"
              width={120}
              height={120}
              className="grayscale hover:grayscale-0 transition ease-in-out delay-150"
            />
          </li>
          <li>
            <Image
              src="/javascript.png"
              width={40}
              height={40}
              className="grayscale hover:grayscale-0 transition ease-in-out delay-150"
            />
          </li>
        </ul>
      </div>
      <div className="pt-20 max-w-6xl m-auto pl-4">
        <div className="flex ">
          <div className="pb-4">
            <div className="text-4xl pb-4" style={gellix13.style}>
              About Me
              <div className="w-20 h-1 bg-lightgreen mt-2"></div>
            </div>
            <div className="max-w-xl text-lg ">
              I am a self-driven, career-oriented software developer
              specializing in front and Back-end development and open-source,
              currently pursuing a bachelors degree in Electrical Electronics
              Engineering. My expertise lies in building interactive web and
              Mobile applications both on the Client Side and Server Side.
              Primarily working with technologies like
              <span className="text-lightgreen">
                JavaScript, Next.js, TypeScript Graphql And Apollo Client e.t.c
              </span>
              <div className="pt-4">
                My main focus these days is building accessible, inclusive
                products and digital experiences at{" "}
                <span className="text-lightgreen">Picotel</span> for a variety
                of clients.
              </div>
              <div className="pt-10 text-lightgreen font-semibold">
                Read more
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20 max-w-8xl m-auto">
          <div className="text-4xl pb-4 " style={gellix13.style}>
            Work Experience
            <div className="w-32 h-1 bg-lightgreen mt-2"></div>
          </div>
          <div className="pt-10">
            <div className="flex">
              <div className="flex max-w-3xl m-auto">
                <div className=" inline-block items-center justify-center text-center">
                  <Image
                    src="/alps.jpg"
                    width={180}
                    height={180}
                    className="rounded-sm"
                  />
                  <div className="border-l border-lightgreen min-h-32 ml-9 mt-1" />
                  <div className="p-2 rounded-full bg-lightgreen w-4 h-4 ml-7 " />
                  -
                </div>
                <div className="px-4">
                  <span className="text-lightgreen text-sm font-semibold">
                    Intern
                  </span>
                  <div className="text-xl font-semibold pb-2">
                    Alps Finance -- Full Stack Engineer
                  </div>
                  <span className="text-sm ">AUG, 5 2019 -- PRESENT</span>
                  <div className="text-sm pt-4">
                    Revitalized Alps Finance website, elevating standards and
                    significantly increasing user retention. Acquired valuable
                    Web 3 insights, showcasing adaptability and a keen grasp of
                    innovative technologies. Ready to bring this expertise and
                    enthusiasm to your team
                  </div>
                </div>
              </div>
            </div>
            {/* Sectioin for Picotel Network Solutions */}
            <div className="flex max-w-3xl m-auto mt-2">
              <div className=" inline-block items-center justify-center text-center">
                <Image
                  src="/logoxl.png"
                  width={180}
                  height={180}
                  className="rounded-sm"
                />
                <div className="border-l border-lightgreen h-4/5 mt-3 ml-9" />
              </div>
              <div className="px-4">
                <span className="text-lightgreen text-sm font-semibold">
                  Full-Stack Engineer
                </span>
                <div className="text-xl font-semibold pb-2">
                  <a href="https://picotelnigeria.com">
                    Picotel Network Solutions -- Full Stack Engineer
                  </a>
                </div>
                <span className="text-sm ">AUG, 5 2019 -- PRESENT</span>
                <ul className="text-sm pt-8 list-disc">
                  <li className="pb-4">
                    I commenced my journey at Picotel as an intern Network
                    Engineer, demonstrating proficiency that led to my
                    transition to a Full Stack Engineer. During my tenure, I
                    spearheaded the development of in-house systems, showcasing
                    my ability to contribute strategically.
                  </li>
                  <li className="pb-4">
                    Recognizing my dedication and accomplishments, I was
                    promoted to a senior role within the Full Stack Development
                    team. This progression underscores my commitment to
                    continuous growth and my capacity to deliver impactful
                    solutions within a professional setting.
                  </li>
                  <li className="pb-4">
                    Notably, I developed an in-house invoice generator and
                    reminder system, demonstrating both technical prowess and
                    practical contributions to enhance company operations. This
                    aligns with my commitment to advancing both my skills and
                    the organizations technological capabilities.
                  </li>
                  <li className="pb-4">
                    Through my software contributions, we achieved operational
                    excellence, enabling a 20% company expansion in 2022. The
                    impact on service quality and efficiency showcases the
                    tangible results of my work.
                  </li>
                  <li className="pb-4">
                    Simultaneously, our user retention time on the site saw a
                    significant boost, increasing by 15% in the same month.
                    <br />
                    Recognizing my dedication and accomplishments, I was
                    promoted to a senior role within the Full Stack Development
                    team
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold mt-20">
              Some things ive built -- Top 5
            </div>
            <div className="w-32 h-1 bg-lightgreen mt-2"></div>
            {/* Section for List of Projects */}
            <div className="inline-block md:grid grid-cols-2 md:gap-4 ">
              <div className="inline-block mt-10 w-full">
                <div className="flex mx-5 ">
                  <div className="text-md md:text-5xl text-lightgreen font-semibold mr-8 md:mr-16">
                    01
                  </div>
                  <div>
                    <span className="text-lightgreen text-sm">
                      Kanban Like Application
                    </span>
                    <div className="text-3xl font-semibold">Ideahub</div>
                    <div className="text-lg tracking-tighter mt-5">
                      I crafted a personalized Kanban app to manage and track my
                      ideas, addressing the challenge of unfinished projects.
                      This tool reflects my commitment to continuous
                      improvement, and ironically, I'm still fine-tuning it for
                      enhanced functionality.
                    </div>
                  </div>
                </div>
                <div className="flex mx-5 my-10 ">
                  <div className="text-md md:text-5xl text-lightgreen font-semibold mr-8 md:mr-16">
                    03
                  </div>
                  <div>
                    <span className="text-lightgreen text-sm">
                      Kanban Like Application
                    </span>
                    <div className="text-3xl font-semibold">Ideahub</div>
                    <div className="text-lg tracking-tighter mt-5">
                      I crafted a personalized Kanban app to manage and track my
                      ideas, addressing the challenge of unfinished projects.
                      This tool reflects my commitment to continuous
                      improvement, and ironically, I'm still fine-tuning it for
                      enhanced functionality.
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-block mt-10 ">
                <div className="flex mx-5 w-full">
                  <div className="text-md md:text-5xl text-lightgreen font-semibold mr-8 md:mr-16">
                    02
                  </div>
                  <div>
                    <span className="text-lightgreen text-sm">
                      Website Revamp and Inhouse-Systems
                    </span>
                    <div className="text-3xl font-semibold">Picotel</div>
                    <div className="text-lg tracking-tighter mt-5 overflow-hidden">
                      At Picotel Network Solutions, I started as a Network
                      Engineer and later became a Full Stack Engineer. I
                      revamped the website, boosting customer acquisition and
                      retention. I also developed an in-house system for
                      managing client invoices and due date reminders
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 flex justify-center">
        <button className="text-sm px-6 py-3 border-lightgreen border rounded-sm text-lightgreen">
          View More
        </button>
      </div>
      <div className="text-center py-52">
        <span className="text-lightgreen text-sm">Get in touch with me</span>
        <div className="text-6xl font-semibold text-center">Get in Touch</div>
        <div className="flex justify-center max-w-xl m-auto pt-3 px-4">
          Feel free to reach out if you have any questions I{"'"}ll respond as
          soon as possible
        </div>
        <div className="flex justify-center pt-10">
          <button className="text-sm px-6 py-3 border-lightgreen border rounded-sm text-lightgreen">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="flex justify-center text-sm pb-4">
        Designed and Built By
        <span className="text-lightgreen"> {"--"}Gbadebo Oluwarimi</span>
      </div>
    </main>
  );
}
