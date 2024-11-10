const Contact = () => {
  return (
    <div className="w-full min-h-screen p-4 sm:p-8">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          GET IN TOUCH
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-8">
          <div className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow-xl p-4 sm:p-6">
            <div className="p-4">
              <h2 className="text-xl sm:text-2xl font-bold">Let&apos;s Connect</h2>
              <p className="py-4 text-sm sm:text-base">
                I&apos;m currently available for freelance work or full-time positions.
              </p>
              <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.9184622162766!2d67.10267307460485!3d24.93484747788085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b0b20b0f29%3A0x1ba52900691dd091!2sMaskan%20Chowrangi%20Bus%20Stop!5e0!3m2!1sen!2s!4v1731247431328!5m2!1sen!2s" 
              width="400" height="400" loading="lazy" className="border-rounded-md"></iframe>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 bg-white rounded-xl shadow-xl p-4 sm:p-6">
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label className="text-sm py-2">Name</label>
                <input 
                  className="border-2 rounded-lg p-2 sm:p-3 flex border-gray-300" 
                  type="text" 
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm py-2">Email</label>
                <input 
                  className="border-2 rounded-lg p-2 sm:p-3 flex border-gray-300" 
                  type="email" 
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm py-2">Message</label>
                <textarea 
                  className="border-2 rounded-lg p-2 sm:p-3 border-gray-300" 
                  rows={10}
                ></textarea>
              </div>
              <button className="w-full p-3 sm:p-4 text-gray-100 mt-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;