import { assets, infoList, toolsData, toolsData1 } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
        <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'>About me</motion.h2>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div 
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>
                I am an experience Cybersecurity Analyst and hold multiple 
                industry-recognized certifications, including Certified SOC Analyst(CSA), 
                Certified Microsoft Fabric Analyst, Certified in Cybersecurity (ISC2), 
                Red Hat Certified System Administrator (RHCSA), Certified AppSec Practitioner(CAP), 
                Certified Network Security Practitioner (CNSP), Windows & IOS Forensic(Belkasoft), and 
                Certified Linux File System Professional (Center for Cyber Security Studies & Research).
                </p>
                <motion.ul 
                whileHover={{scale: 1.05}}
                className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <motion.li 
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.3}}
                        className='border-[0.5px] border-grey-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover 
                        hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white 
                        dark:hover:bg-darkHover/50' key={index}>
                            <Image src={isDarkMode ? iconDark : icon} alt='title' className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-grey-700 dark:text-white'>{title}</h3>
                            <p className='text-gery-600 text-sm dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}

                </motion.ul>
                <motion.h4 
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 1.3}}
                className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tool I Use</motion.h4>
                <motion.ul 
                // whileHover={{scale: 1.01}}
                className='flex items-center gap-3 mb-4 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <motion.li 
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.3}}
                        key={index} className='flex items-center justify-center w-20 sm:w-14 aspect-square 
                        border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500
                        hover:shadow-black dark:hover:shadow-slate-200 
                        dark:hover:bg-darkHover/50'>
                            <Image src={tool} alt='Tool' className='w-10 sm:w-15 dark:hover:bg-slate-200 dark:hover:rounded-lg' />
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.ul 
                // whileHover={{scale: 1.01}}
                className='flex items-center gap-3 sm:gap-5'>
                    {toolsData1.map((tool, index)=>(
                        <motion.li 
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.3}}
                        key={index} className='flex items-center justify-center w-20 sm:w-14 aspect-square 
                        border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500
                        hover:shadow-black dark:hover:shadow-slate-200 
                        dark:hover:bg-darkHover/50'>
                            <Image src={tool} alt='Tool' className='w-10 sm:w-15 dark:hover:bg-slate-200 dark:hover:rounded-lg' />
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About