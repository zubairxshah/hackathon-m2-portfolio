const About = () => {
  return (
    <div className="w-full min-h-screen p-4 sm:p-8">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              I&apos;m a passionate Frontend Developer with experience in building 
              responsive and performant web applications.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              With over 1 year of experience in web development, I&apos;ve worked on 
              various projects ranging from TypeScript/JS coding to creating stunning websites.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">At GIAIC</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              I am honing my skills in React.js, Next.js, and TypeScript to 
              deliver high-quality web applications. I&apos;m also learning about
              AI, machine learning, and its potential impact on the future of
              the internet.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">My Target</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              I want to become a skilled Frontend/Backend Developer includin expertise in Agentic 
              AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;