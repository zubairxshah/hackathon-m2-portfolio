const Skills = () => {
  const skillsList = [
    { name: 'React', level: '60%' },
    { name: 'TypeScript', level: '85%' },
    { name: 'Next.js', level: '75%' },
    { name: 'CSS/Tailwind', level: '85%' },
    { name: 'JavaScript', level: '90%' },
  ];

  return (
    <div className="w-full min-h-screen p-4 sm:p-8">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {skillsList.map((skill, index) => (
            <div 
              key={index} 
              className="p-4 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white"
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg sm:text-xl font-bold">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;