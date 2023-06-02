const SkillsCard = ({ src, skillName, aboutSkill }) => {
  return (
    <div className="bg-[#101010] w-60 h-60 lg:h-72 lg:w-72 p-5 mr-5 rounded-sm border-b border-b-[#8338EA] z-20">
      <div className="">
        <img src={src} className="" alt="project image" />
      </div>
      <h2 className="my-3 lg:text-2xl">{skillName}</h2>
      <div className="text-xs lg:text-sm text-gray-500 mb-3">{aboutSkill}</div>
    </div>
  );
};

export default SkillsCard;
