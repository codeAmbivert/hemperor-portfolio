const projectCard = ({ src, projectName, aboutProject }) => {
  return (
    <div className="bg-gray-600 hover:bg-gradient-to-b from-[#8338EA] to-[#50DFB4] p-[0.1rem] w-64 lg:w-[19rem] lg:h-[19rem] mr-5 ">
      <div className="bg-black h-full w-full p-5">
        <div className="h-10 w-10">
          <img src={src} className="h-full w-full" alt="project card image" />
        </div>
        <h2 className="uppercase my-4 lg:text-xl">{projectName}</h2>
        <div className="text-xs lg:text-sm text-gray-500 mb-3  lg:mb-5">{aboutProject}</div>
        <div className="flex hover:text-gradient-to-b from-[#8338EA] to-[#50DFB4]">
          Check it out{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
