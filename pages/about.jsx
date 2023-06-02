import Layout from "@/components/Layout";
import AboutCard from "@/components/AboutCard";
import { skillsDetails } from "@/public/details";

const skills = () => {
  return (
    <Layout>
      <div className="mt-20 w-[90vw]">
        <div className="h-auto w-full">
          <img src="/work desk.png" className="h-full w-full" alt="work desk" />
        </div>

        <h1 className="text-xl md:text-3xl lg:text-4xl my-7 text-center">
          “If you think good design is expensive you should look at the cost of
          bad design.”
        </h1>

        <div className="text-xs md:text-base lg:text-lg text-gray-500 leading-loose">
          I am a user focused and data driven Product designer specialized in
          creating seamless user experience with a touch of aesthetics. I help
          businesses and companies reach their goals by designing user-centric
          digital products & interactive experiences. My thirst and persistent
          quest for knowledge as a designer has given me the rquired but
          in-depth knowledge required in detecting the user pain points and how
          to best convert the solution to better design iteration while putting
          the business goal in mind.
          <br />
          <br />
          I’m a critical thinker and an empathy driv e product designer that
          uses accumulated experience in UX design to create/facilitate usable,
          functional & delightful digital products.
        </div>

        <div className="my-16">
          <h1 className="uppercase text-4xl lg:font-bold font-bold mb-6">
            SKILLS
          </h1>
          <div className="overflow-x-scroll">
            <div className="flex w-fit">
              {skillsDetails.map((eachSkill, index) => {
                return (
                  <AboutCard
                    key={index}
                    src={eachSkill.src}
                    skillName={eachSkill.skillName}
                    aboutSkill={eachSkill.aboutSkill}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <h1 className="uppercase text-4xl lg:text-bold font-bold mb-6">
            Experience
          </h1>
          {/*  */}
          <div className="flex md:justify-between items-center border-b-2 pb-8 border-b-gray-500">
            <div className="md:w-2/3 md:grid md:grid-cols-2">
              <div className="h-10 w-10 md:h-20 md:w-20">
                <img
                  src="/figma logo.png"
                  className="h-full w-full"
                  alt="figma logo"
                />
              </div>
              <div className="">
                <h2 className="font-bold text-sm w-40 md:w-fit mt-3 mb-1">
                  Product Designer
                </h2>
                <p className="text-gray-500 text-xs">Algocrib</p>
              </div>
            </div>

            <div className="text-gray-300 text-sm md:w-1/3">
              A digital company passionate about using technology, innovation
              and design to building engaging websites and digital products for
              organizations across multiple industries.
            </div>
          </div>
          {/*  */}
          <div className="flex mt-6 mb-32">
            <div className="md:w-2/3 md:grid md:grid-cols-2">
              <div className="h-10 w-10 md:h-20 md:w-20">
                <img
                  src="/figma logo.png"
                  className="h-full w-full"
                  alt="figma logo"
                />
              </div>
              <div>
                <h2 className="font-bold text-sm w-40 mt-3 mb-1">
                  Product Designer
                </h2>
                <p className="text-gray-500 text-xs">Algocrib</p>
              </div>
            </div>
            <div className="text-gray-300 text-sm md:w-1/3">
              A digital company passionate about using technology, innovation
              and design to building engaging websites and digital products for
              organizations across multiple industries.
            </div>
          </div>
        </div>

        <div>
          <h1 className="uppercase text-4xl font-bold mb-4">certifications</h1>
          <div className="mb-16">
            <img
              src="zuri certificate.png"
              className="h-auto w-full"
              alt="zuri certificate"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default skills;
