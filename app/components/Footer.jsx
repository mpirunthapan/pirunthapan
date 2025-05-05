import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {

    const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark:assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='flex items-center gap-2 mx-auto w-max'>
            <Image src={isDarkMode ? assets.mail_icon_dark: assets.mail_icon} alt='' className='w-6'/>
            mpirunthapan@gmail.com
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>
          &copy; {currentYear} Pirunthapan. All rights reserved.
        </p>
        <ul className='flex items-center gap-10 mt-4 sm:mt-0 justify-center'>
            <li><a target='_blank' href="https://github.com/mpirunthapan">Github</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/pirunthapan-murugaiah">Linkedin</a></li>
            <li><a target='_blank' href="https://www.instagram.com/pirunthapan_m/">Instagram</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
