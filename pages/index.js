import ProjectCard from "@/components/ProjectCard";
import Layout from "@/components/Layout";
import { projectDetails } from "@/public/details";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <Layout>
      <div className="mt-20 max-w-[90vw] justify-self-center">
        <div className="md:flex md:justify-between md:items-center">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold my-5">
              Hi, I&#39;m <br /> Design Hemperor
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-[#50DFB4] mb-6">
              “A product designer that loves creating seamless user <br />{" "}
              experiences with a touch of aesthetics.”
            </p>
            <div className="mb-5">
              <a
                href="mailto:Charlesemmanuel4business@gmail.com"
                className="bg-[#8338EA] my-2 py-3 px-6 text-sm md:text-base rounded-md mb-5 hover:bg-gradient-to-b from-[#8338EA] to-[#50DFB4] "
              >
                Get in touch
              </a>
              <a
                href="mailto:Charlesemmanuel4business@gmail.com"
                className="hover:text-[#8338EA] bg-[#1E1E1E] ml-2 my-2 py-3 px-6 text-sm md:text-base rounded-md mb-5"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-16">
            <div className="h-70 lg:h-96">
              <img
                src="/charles head.png"
                className="h-full w-full"
                alt="charles' head"
              />
            </div>
          </div>
        </div>
        <div className="justify-self-end text-xl font-bold mt-10">
          -Charles Emmanuel, UIUX designer.
        </div>

        <div className="flex justify-center items-center flex-col my-10 p-1 md:flex-row">
          <div className="w-full md:w-5/12">
            <video
              className="h-full w-full"
              src="/Charles' designs.mp4"
              muted
              autoPlay
              loop
            />
          </div>
          <div className="md:flex md:flex-col md:justify-center md:w-6/12 md:mx-auto">
            <h1 className="justify-sel text-4xl md:text-5xl my-4 leading-tight">
              <Typewriter
                options={{
                  strings: [
                    "Design is how it works.",
                    "Design is Innovation.",
                    "Design adds value.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <span className="text-xs lg:text-lg text-[#959595]">
              I help businesses and companies reach their goals by designing
              user-centric digital products & interactive but seamless
              experiences.
            </span>
          </div>
        </div>

        <div className="my-16 lg:my-20">
          <h1 className="uppercase text-4xl font-bold mb-6 lg:text-5xl">
            Projects
          </h1>
          <div className="overflow-x-scroll z-10">
            <div className="flex w-fit">
              {projectDetails.map((eachProject, index) => {
                return (
                  <ProjectCard
                    key={index}
                    src={eachProject.src}
                    projectName={eachProject.projectName}
                    aboutProject={eachProject.aboutProject}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
