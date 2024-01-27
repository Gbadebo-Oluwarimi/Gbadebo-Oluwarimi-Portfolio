"use client";
import { useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";
const gellix11 = localFont({ src: "../fonts/gellix-11.ttf" });
const gellix13 = localFont({ src: "../fonts/gellix-13.ttf" });
const mattermedium = localFont({ src: "../fonts/Matter-Medium.ttf" });

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    });
  }, []);
  return (
    <main
      style={gellix11.style}
      className="main min-h-screen text-xl overflow-hidden"
    >
      <nav className=" max-w-7xl m-auto pt-8 flex align-middle text-center items-center justify-between">
        <div data-aos="fade-up" className="text-2xl  pl-4 md:p-0 ">
          Gbadebo <span className="text-lightgreen">Oluwarimi</span>
        </div>

        <ul
          className="justify-between hidden md:flex text-sm overflow-hidden w-1/3 "
          data-aos="fade-up"
          style={gellix11.style}
        >
          <li>About me </li>
          <li>Experience</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <button
          style={gellix11.style}
          className="text-sm p-3 "
          data-aos="fade-up"
        >
          Resume
        </button>
      </nav>

      <div className="inline-block md:flex max-w-7xl m-auto sm:pl-4">
        <div className="pt-24 " data-aos="fade-up" data-aos-duration="2000">
          <div className="pb-6 text-center md:text-left text-sm text-gray2">
            Hi, My name is Rimi
            <div className="   w-20 h-1 bg-lightgreen mt-2"></div>
          </div>
          <div
            className="text-center md:text-left text-3xl md:text-6xl"
            style={mattermedium.style}
          >
            Software Engineer, Network <br />
            <span className="text-lightgreen">Architect</span> & System
            Maintainer
          </div>
          <div
            className="pt-8 max-w-xl text-center  pb-5 lg:pl-0 md:text-left text-sm text-gray2"
            style={gellix11.style}
          >
            As a committed backend engineer, I excel in building and sometimes
            redefining outstanding digital infrastructures. My current pursuit
            involves leveraging my skills to develop efficient, user-focused
            solutions at {""}
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
      <div
        className="pt-10 text-center items-center "
        data-aos="fade-up"
        data-aos-duration="4000"
      >
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
        <div className=" block md:flex gap-20">
          <div className="pb-4" data-aos="fade-left">
            <div className="text-4xl pb-4" style={gellix13.style}>
              About Me
              <div className="w-20 h-1 bg-lightgreen mt-2"></div>
            </div>
            <div className="max-w-xl text-lg ">
              As a motivated and career-focused software engineer, I excel in
              both front-end and back-end development, with a particular
              interest in open-source technologies. Currently, Im advancing my
              knowledge by pursuing a bachelors degree in Electrical Electronics
              Engineering. My forte lies in constructing dynamic web and mobile
              applications, and Digital infrastructures with a balanced focus on
              both client-side and server-side technologies. I primarily engage
              with a diverse range of cutting-edge technologies to deliver
              robust solutions.
              <span className="text-lightgreen">
                JavaScript, Next.js, TypeScript Graphql And Apollo Client e.t.c
              </span>
              <div className="pt-4">
                As a Backend Developer at Picotel, I&apos;m focused on building
                scalable, inclusive solutions to ensure optimal digital
                experiences for our diverse clientele. My role involves
                anticipating future needs for performance and scalability,
                ensuring the success of our products at {""}
                <span className="text-lightgreen">Picotel</span> for a variety
                of clients.
              </div>
              <div className="pt-10 text-lightgreen font-semibold">
                Read more
              </div>
            </div>
          </div>
          <div className=" ">
            <Image
              src="/block.svg"
              alt="Blocks"
              width={500}
              height={500}
              className="md:mt-20"
              data-aos="fade-right"
            />
          </div>
        </div>
        <div className="pt-20 max-w-8xl m-auto">
          <div className="text-4xl pb-4 " style={gellix13.style}>
            Work Experience
            <div className="w-32 h-1 bg-lightgreen mt-2"></div>
          </div>
          <div className="pt-10">
            <div className="flex" data-aos="fade-right">
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
                    innovative technologies.
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
              <div className="px-4" data-aos="fade-left">
                <span className="text-lightgreen text-sm font-semibold">
                  Sodftware Engineer
                </span>
                <div className="text-xl font-semibold pb-2">
                  <a href="https://picotelnigeria.com">
                    Picotel Network Solutions -- Full Stack Engineer
                  </a>
                </div>
                <span className="text-sm ">AUG, 5 2020 -- PRESENT</span>
                <ul className="text-sm pt-8 list-disc">
                  <li className="pb-4">
                    I began my career as a Junior Network Engineer, where I was
                    primarily responsible for the reconfiguration of existing
                    network designs to align with the company&apos;s standards.
                    I proficiently used tools such as WinBox for the
                    configuration of Mikrotik Routers, Ubiquity, and Cambium
                  </li>
                  <li className="pb-4">
                    In light of my technical prowess and knack for
                    problem-solving, I quickly transitioned into the role of
                    Junior Software Developer. This move was prompted by my
                    successful development of a bandwidth throttling script
                    using BASH.
                  </li>
                  <li className="pb-4">
                    I designed and implemented scalable APIs that streamlined
                    the management of our in-house systems. These APIs
                    simplified the deployment process, significantly increasing
                    our deployment throughput. This not only enhanced our
                    operational efficiency but also reduced downtime during
                    updates by 45%, ensuring seamless user experience.
                  </li>
                  <li className="pb-4">
                    Leveraging technologies such as GraphQL query, TypeScript,
                    and AWS Cloud implementation and deployment, my software
                    contributions led to operational excellence. This resulted
                    in a 20% growth in company revenue, transitioning from a
                    six-figure to a seven-figure revenue generating company in
                    2022.
                  </li>
                  <li className="pb-4">
                    In recognition of my dedication and hard work, I was awarded
                    a scholarship for a professional certification of my choice.
                    I chose to pursue the AWS Certified Cloud Practitioner (CCP)
                    certification, which I successfully obtained. Currently, I
                    am preparing for the AWS DevOps and AWS Solutions Architect
                    - Associate (SAA) certifications
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
                <div
                  className="flex mx-5 "
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div className="text-md md:text-5xl text-lightgreen font-semibold mr-8 md:mr-16">
                    01
                  </div>
                  <div>
                    <span className="text-lightgreen text-sm">
                      Kanban Like Application
                    </span>
                    <div className="text-3xl font-semibold">Ideahub</div>
                    <div
                      className="text-lg tracking-tighter mt-5"
                      style={mattermedium.style}
                    >
                      I crafted a personalized Kanban app to manage and track my
                      ideas, addressing the challenge of unfinished projects.
                      This tool reflects my commitment to continuous
                      improvement, and ironically, I&apos;m still fine-tuning it
                      for enhanced functionality.
                    </div>
                    <ul className="flex text-sm text-lightgreen mt-5">
                      <li className="mr-2">Reactjs</li>
                      <li className="mr-2">Redux</li>
                      <li className="mr-2">Nodejs</li>
                      <li className="mr-2">MongoDB</li>
                      <a href="https://github.com/Gbadebo-Oluwarimi/ideahub">
                        <li className="mr-2 text-lightgreen flex justify-center underline">
                          Github Link{" "}
                          <span className="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-3 h-3 text-lightgreen"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </span>
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div
                  className="flex mx-5 my-10 "
                  data-aos="fade-down"
                  data-aos-duration="3000"
                >
                  <div className="text-md md:text-5xl text-lightgreen font-sem1ibold mr-8 md:mr-16">
                    02
                  </div>
                  <div>
                    <span className="text-lightgreen text-sm">
                      Website Revamp
                    </span>
                    <div className="text-3xl font-semibold">Bitsniper</div>
                    <div
                      className="text-lg tracking-tighter mt-5"
                      style={mattermedium.style}
                    >
                      I played a crucial role in revamping Bitsnipers website to
                      cater to the Web 3 gaming audience. The redesign focused
                      on creating a visually appealing and engaging experience
                      that aligns seamlessly with the evolving gaming landscape
                      and the preferences of the target audience.
                    </div>
                    <ul className="flex text-sm text-lightgreen mt-5">
                      <li className="mr-2">NextJs</li>
                      <li className="mr-2"></li>
                      <a href="https://bitsniper.vercel.app">
                        <li className="mr-2 text-lightgreen flex justify-center underline">
                          v1-Demo Site link{" "}
                          <span className="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-3 h-3 text-lightgreen"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </span>
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="inline-block mt-10 w-full">
                <div
                  className="flex mx-5 "
                  data-aos="fade-down"
                  data-aos-duration="3000"
                >
                  <div className="text-md md:text-5xl text-lightgreen font-semibold mr-8 md:mr-16">
                    03
                  </div>
                  <div>
                    <span className="text-lightgreen text-sm">
                      WebSite Revamp and Building In-house-Systems
                    </span>
                    <div className="text-3xl font-semibold">Picotel </div>
                    <div
                      className="text-lg tracking-tighter mt-5"
                      style={mattermedium.style}
                    >
                      At Picotel Network Solutions, I started as a Network
                      Engineer and later became a Full Stack Engineer. I
                      revamped the website, boosting customer acquisition and
                      retention. I also developed an in-house system for
                      managing client invoices and due date reminders.
                    </div>
                    <ul className="flex text-sm text-lightgreen mt-5">
                      <li className="mr-2">Reactjs</li>
                      <li className="mr-2">Redux</li>
                      <li className="mr-2">Nodejs</li>
                      <a href="https://picotelnigeria.com">
                        <li className="mr-2 text-lightgreen flex justify-center underline">
                          Official Site link{" "}
                          <span className="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-3 h-3 text-lightgreen"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </span>
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div
                  className="flex mx-5 my-10 "
                  data-aos="fade-down"
                  data-aos-duration="5000"
                >
                  <div className="text-md md:text-5xl text-lightgreen font-semibold mr-8 md:mr-16">
                    04
                  </div>
                  <div>
                    <span className="text-lightgreen text-sm">
                      Building And Deploying
                    </span>
                    <div className="text-3xl font-semibold">The Forum</div>
                    <div
                      className="text-lg tracking-tighter mt-5"
                      style={mattermedium.style}
                    >
                      I assisted with backend development at a startup,
                      deploying scalable systems and optimizing algorithms for
                      quick information access. This experience deepened my
                      knowledge of data structures, algorithms, and system
                      design. Although the startup hasn't officially launched,
                      it has been a valuable learning opportunity for me.nce.
                    </div>
                    <ul className="flex text-sm text-lightgreen mt-5">
                      <li className="mr-2">Scalable Systems</li>
                      <li className="mr-2">System Architecture</li>
                      <li className="mr-2">Data structures and algorithms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 flex justify-center">
        <a href="https://github.com/gbadebo-oluwarimi">
          {" "}
          <button className="text-sm px-6 py-3 border-lightgreen border rounded-sm text-lightgreen">
            View More
          </button>
        </a>
      </div>
      <div className="text-center py-52" data-aos="fade-up">
        <span className="text-lightgreen text-sm">Get in touch with me</span>
        <div className="text-6xl font-semibold text-center">Get in Touch</div>
        <div className="flex justify-center max-w-xl m-auto pt-3 px-4">
          Feel free to reach out if you have any questions I&apos;ll respond as
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
