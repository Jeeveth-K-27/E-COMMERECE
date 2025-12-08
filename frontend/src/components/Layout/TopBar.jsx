import React from 'react'
import {TbBrandMeta} from "react-icons/tb";
import {IoLogoInstagram} from "react-icons/io";
import {RiTwitterXLine} from "react-icons/ri";

const TopBar = () => {
  return (
    <div className='bg-custom-red text-white'>
        
        <div className='flex justify-between items-center p-4'>
            
            <div className='hidden md:flex items-center gap-4'>
                    <a href="#" className='hover:text-gray-300'>
                        <TbBrandMeta className='h-5 w-5'/>
                    </a>

                    <a href="#" className='hover:text-gray-300'>
                        <IoLogoInstagram className='h-5 w-5'/>
                    </a>

                    <a href="#" className='hover:text-gray-300'>
                        <RiTwitterXLine className='h-4 w-4'/>
                    </a>
            </div>

            <div className="text-[12px] text-center flex-grow md:text-sm">
                <span>We Ship Worldwide - Fast and reliable Shipping!</span>
            </div>

            <div className="text-sm hidden md:block">
                <a href="tel:+91-9940641254" className='hover:text-gray-300'>+91 9940641254</a>
            </div>

        </div>

    </div>
  )
}

export default TopBar