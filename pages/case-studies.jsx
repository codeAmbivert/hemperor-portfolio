import Layout from "@/components/Layout";
import CaseStudyCards from "@/components/CaseStudyCards";
import { caseStudiesDetails } from "@/public/details";

const caseStudies = () => {
  console.log(caseStudiesDetails);
  return (
    <Layout>
      <div className="mt-20 mb-16 w-[90vw]">
        <h1 className="tex-3xl my-7 text-center">
          “If you think good design is expensive you should look at the cost of
          bad design.”
        </h1>
        <div className="flex flex-wrap justify-around items-center">
          {caseStudiesDetails.map((eachCase, index) => {
            return (
              <CaseStudyCards
                key={index}
                src={eachCase.src}
                caseStudyName={eachCase.caseStudyName}
                aboutCaseStudy={eachCase.aboutCaseStudy}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default caseStudies;
