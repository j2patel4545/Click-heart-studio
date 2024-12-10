import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import jayCirti from '../assets/Cirti/jayCirti.png';
import RohitCirti from '../assets/Cirti/RohitCirti.png';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

function About() {
  const phoneNumber1 = "93131 51169"; // Phone number to dial Rohit  +91 93131 51169
  const phoneNumber2 = "9662233155"; // Phone number to dial Jay

  const textVariants = {
    hidden: { opacity: 0, y: 50 },  // Start below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },  // Fade in and move to the original position
  };

  return (
    <div className='bg-black pt-24 w-screen text-white'>
      {/* Section 2 */}
      <section className="px-4 py-32 min-h-screen items-center bg-black md:px-8 lg:px-12 mt-0 md:mt-10">
        <div className="container items-center max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center sm:-mx-3">
            {/* Left Text */}
            <div className="w-full md:w-1/2 md:px-3">
              <div className="space-y-6 md:space-y-4 lg:space-y-8 xl:space-y-9">
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
                >
                  <motion.span variants={textVariants} className="block">
                     WE Capture Timeless Moments
                  </motion.span>
                  <motion.span variants={textVariants} className="block text-green-300">
                    Through the Lens
                  </motion.span>
                </motion.h1>
                <p className="text-base text-gray-400 sm:text-lg lg:text-xl">
                  Our passion is to tell your unique story through stunning photography.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    to="/contact" // Navigate to /contact
                    className="flex items-center justify-center w-full px-6 py-3 text-lg text-black bg-green-300 rounded-md hover:bg-green-200 sm:w-auto"
                  >
                    Book a Session
                  </Link>
                  <Link
                    to="/Service" // Navigate to /service
                    className="flex items-center justify-center px-6 py-3 mt-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 sm:mt-0"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1595241/pexels-photo-1595241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="photography session" 
                  loading="lazy" // Lazy loading added here
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <u className='flex w-screen justify-center items-center text-black bg-white text-2xl  p-5'> About us</u>
      {/* Section 3 */}
      <section className="bg-white py-16 md:py-24">
        <div className="container flex flex-wrap max-w-6xl px-4 mx-auto md:flex-nowrap md:px-8 lg:px-16">
          {/* Image */}
          <div className="w-full border-8 border-black mb-12 md:mb-0 md:w-1/2">
            <img 
              src={RohitCirti} 
              alt="boost creativity" 
              className="w-full max-w-md object-contain mx-auto md:max-w-none" 
              loading="lazy" // Lazy loading added here
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-2xl font-semibold text-black md:text-3xl">
              Rohit Ajaybhai Patel
            </h2>
            <p className="mt-4 text-gray-700 lg:text-lg">
              Our studio specializes in capturing the essence of your special moments with artistry and finesse.
            </p>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-6 h-6 text-green-300 mr-2">✓</span> Stunning Portrait Photography
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 text-green-300 mr-2">✓</span> Creative Event Coverage
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 text-green-300 mr-2">✓</span> Beautiful Family Sessions
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 text-green-300 mr-2">✓</span> 
                <div className="flex space-x-5 mt-4 text-3xl md:mt-0">
                  {/* Instagram Link */}
                  <a 
                    href="https://www.instagram.com/_ro_hitt21/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-pink-800 "
                  >
                    <FaInstagram className="text-4xl" />
                  </a>
                  {/* WhatsApp Link */}
                  <a 
                    href={`https://wa.me/91${phoneNumber1}`} // WhatsApp link to the specified phone number
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-600"
                  >
                    <FaWhatsapp className="text-4xl" />
                  </a>
                  {/* Call Link */}
                  <a 
                    href={`tel:${phoneNumber1}`} 
                    className="hover:text-blue-700 "
                  >
                    <FaPhone className="text-4xl" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
    {/* <h2 className='text-black'>hello</h2> */}
    <div className="container flex flex-wrap max-w-6xl px-4 mx-auto mt-16 md:flex-nowrap md:px-8 lg:px-16">
  {/* Content First for Mobile */}
  <div className="w-full md:w-1/2 md:pl-10 order-2 md:order-1">
    <h2 className="text-2xl font-semibold text-black md:text-3xl">
      Jay Arvindbhai Halpati
    </h2>
    <p className="mt-4 text-gray-700 lg:text-lg">
      Our professional team is dedicated to creating beautiful visuals that reflect your personality.
    </p>
    <ul className="mt-6 space-y-4 text-gray-600">
      <li className="flex items-center">
        <span className="w-6 h-6 text-green-300 mr-2">✓</span> Tailored Photo Sessions
      </li>
      <li className="flex items-center">
        <span className="w-6 h-6 text-green-300 mr-2">✓</span> High-Quality Prints and Products
      </li>
      <li className="flex items-center">
        <span className="w-6 h-6 text-green-300 mr-2">✓</span> Exceptional Customer Service
      </li>
      <li className="flex items-center">
        <span className="w-6 h-6 text-green-300 mr-2">✓</span> 
        <div className="flex space-x-5 mt-4 text-3xl md:mt-0">
          {/* Instagram Link */}
          <a 
            href="https://www.instagram.com/mr_jay._55/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-pink-800 "
          >
            <FaInstagram className="text-4xl" />
          </a>
          {/* WhatsApp Link */}
          <a 
            href={`https://wa.me/91${phoneNumber2}`} // WhatsApp link to the specified phone number
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            <FaWhatsapp className="text-4xl" />
          </a>
          {/* Call Link */}
          <a 
            href={`tel:${phoneNumber2}`} 
            className="hover:text-blue-700 "
          >
            <FaPhone className="text-4xl" />
          </a>
        </div>
      </li>
    </ul>
  </div>

  {/* Image Last for Mobile */}
  <div className="w-full border-8 border-black mb-12 md:mb-0 md:w-1/2 order-1 md:order-2">
    <img 
      src={jayCirti} 
      alt="boost creativity" 
      className="w-full max-w-md object-contain mx-auto md:max-w-none" 
      loading="lazy" // Lazy loading added here
    />
  </div>
</div>

      
        
      </section>
      
    </div>
  );
}

export default About;
