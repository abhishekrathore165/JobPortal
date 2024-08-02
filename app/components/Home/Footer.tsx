import React from 'react'
import {  FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-[#111111] '>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10 ">
                <div>
                    <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'>Jobify</h1>
                    <p className='text-[14px] text-white text-opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus
                        eligendi totam illo accusantium, similique</p>
                        <div className='mt-[1.5rem] flex items-center space-x-3'>
                             <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col">
                                <FaFacebookF className='text-white'/>
                             </div>
                             <div className="w-[2.4rem] h-[2.4rem] bg-sky-600 rounded-full flex items-center justify-center flex-col">
                                <FaTwitter className='text-white'/>
                             </div>
                             <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
                                <FaYoutube className='text-white'/>
                             </div>
                             <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col">
                                <FaInstagram className='text-white'/>
                             </div>
                        </div>
                </div>
                <div>
                      <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>About Us</h1>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Job</p>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Privacy</p>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Policy</p>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Application</p>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Candidates</p>
                </div>
                <div>
                      <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>Quick Link</h1>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'> All Job</p>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Job Details</p>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>How To Apply</p>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Resume</p>
                      
                </div>
                <div>
                      <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>Get In Touch</h1>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>+0123456789</p>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>example@gmail.com</p>
                      <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Vijay Nagar,Indore</p>
                     
                      
                </div>
            </div>
        </div>
    )
}

export default Footer
