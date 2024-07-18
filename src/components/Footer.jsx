import React from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo, github, email, facebook, instagram, linkedin } from "../assets";

const Footer = () => {
  return (
    <footer className={`bg-tertiary-new`}>
      <section className={`${styles.paddingX} footer flex flex-wrap sm:px-16 px-6 sm:py-16 py-6 max-w-7xl justify-between mx-auto relative z-0`}>
      <Link
          to='/'
          className='flex items-center gap-2 mb-5'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-full h-full object-contain' />
        </Link>
        <div className='w-full xl:w-1/3 lg:w-1/3 md:w-full sm:w-full md:px-3 p-0 mb-6 xl:mb-0 lg:mb-0 md:mb-6'>
          <div className='bg-tertiary flex justify-center rounded-2xl p-5'>
            <a href="https://github.com/RobertViorel" target="_blank" rel="noopener noreferrer" className='mx-4'>
              <img src={github} alt="GitHub" className="w-[30px] h-[30px]" />
            </a>
            <a href="https://www.linkedin.com/in/robert-dumitru-b791b72b4/" target="_blank" rel="noopener noreferrer" className='mx-4' style={{ color: '#d0b870' }}>
              <img src={linkedin} alt="Linkedin" className="w-[30px] h-[30px]" />
            </a>
            <a href="https://www.instagram.com/robert_dumitru.dev/" target="_blank" rel="noopener noreferrer" className='mx-4' style={{ color: '#d0b870' }}>
              <img src={instagram} alt="Instagram" className="w-[30px] h-[30px]" />
            </a>
          </div>
        </div>


        <div className='w-full xl:w-1/3 lg:w-1/3 md:w-full sm:w-full md:px-3 p-0 xl:mb-0 lg:mb-0'>
          <div className='bg-tertiary rounded-2xl flex items-center justify-center p-5'>
            <img src={email} alt='email' className='w-[30px] h-[30px] mr-3' />
            <a href='mailto:robert@dumitrurobert.com' className='text-white text-center font-bold'>
              Robert@dumitrurobert.com
            </a>
          </div>
        </div>
      </section>

      <section className="pb-6 pl-4 pr-4 text-white text-center text-[14px] flex items-center justify-center">
          &copy; {new Date().getFullYear()} Robert Dumitru.  All rights reserved
      </section>
    </footer>
  );
};

export default Footer;
