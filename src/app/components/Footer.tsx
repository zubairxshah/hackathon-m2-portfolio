import Link from "next/Link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-gray-900 text-gray-100">
        <div className="max-w-[1240px] mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Zubair Shah</h3>
              <p className="text-gray-400 mb-4">
                Frontend Developer specializing in building exceptional digital experiences.
                Always eager to learn and create innovative solutions.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <Link href="#" className="hover:text-blue-500 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M22.23 3.88c-.84.37-1.74.62-2.68.73a4.67 4.67 0 0 0 2.05-2.58c-.9.53-1.9.92-2.96 1.13a4.66 4.66 0 0 0-7.94 4.25A13.23 13.23 0 0 1 1.67 2.6a4.66 4.66 0 0 0 1.44 6.23A4.65 4.65 0 0 1 .92 8.2v.06a4.66 4.66 0 0 0 3.74 4.57 4.67 4.67 0 0 1-2.1.08 4.66 4.66 0 0 0 4.35 3.23 9.35 9.35 0 0 1-5.79 2 9.49 9.49 0 0 1-1.11-.07 13.18 13.18 0 0 0 7.14 2.09c8.57 0 13.25-7.1 13.25-13.25 0-.2 0-.4-.02-.6a9.44 9.44 0 0 0 2.32-2.4z"
                    />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/in/m-zubair-shah-642a7a2/" className="hover:text-blue-700 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </Link>
                <Link href="https://github.com/zubairxshah" className="hover:text-gray-400 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">Email:
                  zubairshahmasoomi@gmail.com</span>
                </li>
                <li className="text-gray-400">
                  <span className="block">Location:
                  Karachi, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {currentYear} MZS CodeWorks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  