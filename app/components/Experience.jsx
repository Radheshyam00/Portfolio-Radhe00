'use client'
import { assets, experienceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const Experience = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='experience'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My Journey
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Here’s a timeline of my professional experience, where I applied cybersecurity knowledge, conducted forensic analysis, and protected real-world systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='flex flex-col gap-10'
      >
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className='flex flex-col md:flex-row items-start gap-5 border-l-4 pl-5 border-blue-400 relative'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className='absolute -left-[10px] w-5 h-5 bg-blue-400 rounded-full'></div>
            <div className='flex-1'>
              <h3 className='text-xl font-bold'>{item.role}</h3>
              <p className='text-gray-600 dark:text-gray-300'>{item.company} | {item.duration}</p>
              <ul className='list-disc pl-5 mt-2 text-sm text-gray-700 dark:text-gray-400'>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <Image
              src={item.logo}
              alt={`${item.company} logo`}
              width={250}
              height={250}
              className='rounded-md shadow-md'
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href="https://www.linkedin.com/in/radheshyam-janwa-9a4506227/details/experience/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
        rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
      >
        View Full Experience
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
      </motion.a>
    </motion.div>
  )
}

export default Experience
