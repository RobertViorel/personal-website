import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { prices } from "../constants";

const PriceCard = ({
  index,
  name,
  description,
  package_01,
  package_01_price,
  points_heading,
  points,
}) => (
  <ParallaxTilt className='w-full xl:w-1/3 lg:w-1/3 md:w-2/4 sm:w-full md:px-4 p-0 mb-6'>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='bg-tertiary rounded-2xl p-5'
    >
      <div className='mb-3'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-white text-[14px]'>{description}</p>
      </div>
      <div className='flex justify-between mb-2 pb-2'>
        <p className='font-bold text-[#D0B870] text-[16px] pr-4'>{package_01}</p>
        <span className='text-white text-[14px]'>{package_01_price}</span>
      </div>
      <hr />
      <h3 className='text-white font-bold text-[20px] mb-4'>{points_heading}</h3>
      <ul className='mt-5 list-disc packages_options'>
      {points.map((point, index) => (
  <li key={`packages-point-${index}`} className="text-white-100 text-[14px]  tracking-wider flex items-center mb-2">
    {/* Icon */}
    <img src={point.icon} alt={`icon-${index}`} className="mr-2" style={{width: '19px', height: '19px'}} />

    {/* Text */}
    <span>{point.text}</span>
  </li>
))}
      </ul>
    </motion.div>
  </ParallaxTilt>
);

const Price = () => {
  return (
    <>
      <motion.div className="flex flex-col items-center" variants={textVariant()}>

        <h2 className={styles.sectionPriceText}>Tailor-Made Web Design to Fit Your Budget</h2>
        <p className={styles.sectionPriceSubText}>Displayed prices serve as a reference only. Each project is unique and will be individually assessed for accurate pricing upon consultation and analysis.</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

      </motion.p>

      <div className='mt-20 flex flex-wrap'>
        {prices.map((price, index) => (
          <PriceCard key={`price-${index}`} index={index} {...price} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Price, "prices");
