import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, text, icon }) => (
  <ParallaxTilt
    className='xl:w-1/3 lg:w-1/3 md:w-2/4 sm:w-full md:px-4 p-0 w-full mb-5'
    tiltMaxAngleX={0}
    tiltMaxAngleY={0}
    perspective={1000}
    scale={1.05}
    gyroscope
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-4 px-4 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-center'>{text}</p>
      </div>
    </motion.div>
  </ParallaxTilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Diginex: Your Gateway to Digital Excellence</p>
        <h2 className={styles.heroHeadText}>Web Design and Software Development</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        At Diginex, we are dedicated to enhancing your digital
         presence through a blend of expertise: professional web
         design, customized software solutions, and reliable cloud
         hosting. Our commitment is to elevate your brand and
          unlock your digital potential. Through our integrated
           approach, we empower companies to thrive in the dynamic
            online landscape. Explore how Diginex can be your
            partner in achieving digital excellence.
      </motion.p>

      <div className='mt-20 flex flex-wrap'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
