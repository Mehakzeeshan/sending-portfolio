"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";
  

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
            
            <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Hello, I`&apos;`m{""} 
                    </span>
                    <br />
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Mehak Noor',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Programmer',
        1000,
        'Tech Innovator',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Dedicated Full-Stack Web Developer in progress specializing in HTML5, CSS3, TypeScript, JavaScript, Tailwind CSS, and Next.js, looking forward on building dynamic and user-centric web applications.
            </p>
            <div>
                <Link href="/contact" className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                    Hire Me
                    </Link>
                    <Link
              href="/Mehak Noor CV.pdf" download="Mehak's CV"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
            </div>
            </motion.div>
            <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative flex items-center justify-center">
                <Image
                   src="/images/hero-section1.jpg"
                   alt="hero image"
                   //className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                   width={300}
                   height={300}
                   className="object-cover rounded-full"
                />
                </div>
                </motion.div>
                
            </div>
        </section>
    )
};

export default HeroSection;