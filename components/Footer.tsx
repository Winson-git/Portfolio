import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
        {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50 "
            />
        </div> */}

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                <span className='text-purple'>Let&apos;s Connect!</span>
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                I&apos;m always excited to hear about new opportunities! 
            </p>
            <a href="mailto:winsonhong2001@gmail.com">
                <MagicButton 
                    title="Let&apos;s get in touch"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>@ Winson Hong</p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((info) => (
                    <a
                        key={info.id}
                        href={info.url}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                    >
                        <img src={info.img} alt="icons" width={20} height={20} />
                    </a>
                ))}
            </div>
        </div>  
    </footer>
  )
}

export default Footer