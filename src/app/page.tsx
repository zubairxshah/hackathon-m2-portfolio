// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
<section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 relative">
  {/* Some background elements */}
  <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
  <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

  <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
    {/* Image styling */}
    <div className="order-2 md:order-1 flex justify-center">
      <div className="relative group">
        {/* Decorative ring */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity blur-md"></div>
        
        {/* Image container */}
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden ring-4 ring-white">
          <Image
            src="/images/shahmz.jpg"
            alt="Profile Image"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </div>
    </div>

    
    <div className="order-1 md:order-2 flex flex-col gap-4 text-center md:text-left">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I&apos;m <span className="text-blue-600 relative">
            Zubair Shah</span>
            
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700">
          Frontend Developer
        </h2>
      </div>
      
      <p className="text-lg md:text-xl text-gray-600 py-4">
        I craft responsive websites where technology meets creativity
      </p>
      
      <div className="flex gap-4 justify-center md:justify-start">
        <Link 
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Contact Me
        </Link>
        <Link 
          href="/about"
          className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project resume builder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/resume-page.jpeg"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dynamic Resume Builder</h3>
                <p className="text-gray-600 mb-4">
                  A responsive app which takes user input and creates a wonderful and elegant resume.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    HTML</span>
                  
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    TypeScript</span>
                  
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    CSS</span>
                  
                </div>
                <Link 
                  href="https://resume-mzs.vercel.app/index.html" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>

            {/* Project Song List Todo */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/song-list.jpeg" // Add your project image
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Interactive Song List</h3>
                <p className="text-gray-600 mb-4">
                  An intuitive app with feature-rich ebvironment that adds, edits, and deletes entries.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    React</span>
                  
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Next.js</span>
                  
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Tailwind</span>
                  
                </div>
                <Link
                  href="https://classwork-oct25.vercel.app/todoapp" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>

            {/* Project UseEfft/API */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/useeffect.jpeg"
                  alt="Project 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">API Data & CSR</h3>
                <p className="text-gray-600 mb-4">
                  An example of React Hook useEffect and fetching data from a server dynamically.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Next.js</span>
                  
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    React</span>
                  
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Tailwind</span>
                  
                </div>
                <a 
                  href="https://classwork-oct25.vercel.app/setstateapi" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            My Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Tech stack lister */}
            {['HTML', 'CSS','React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Python'].map((tech) => (
              <div 
                key={tech}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm 
                hover:shadow-md transition-shadow"
              >
                <span className="text-lg font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-[1240px] mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8">
            I&apos;m currently available for freelance projects or full-time positions
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
