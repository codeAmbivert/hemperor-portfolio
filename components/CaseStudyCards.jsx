const caseStudyCards = ({ src, caseStudyName, aboutCaseStudy }) => {
  return (
    <div className="">
      <div className="max-w-sm rounded-2xl overflow-hidden">
        <img src={src} className="w-full" alt="case study image" />
        <div className="border border-t-0 border-gray-500 rounded-b-2xl mb-3 p-5">
          <h2 className="capitalize">{caseStudyName}</h2>
          <div className="text-sm text-gray-500 mb-3">{aboutCaseStudy}</div>
          <a href="#" className="w-fit">
            <div className="w-full mt-6 text-[#8338EA] text-center p-4 bg-[#1E1E1E] rounded-md hover:text-white hover:bg-gradient-to-b from-[#8338EA] to-[#50DFB4]">
              Read more
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default caseStudyCards;
