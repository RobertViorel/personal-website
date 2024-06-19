import { motion } from "framer-motion";
import { styles } from "../styles";


const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto`}>

  <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`} style={{ paddingTop: "120px", paddingBottom: "200px" }}>
    <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#D0B870]' />
      <div className='w-1 sm:h-80 h-40 violet-gradient' />
    </div>

    <div className="relative">
      <h1 className={`${styles.heroHeadText} text-white`}>
        Building Success in the Digital Realm - <span className='text-[#D0B870]'> Your Web Solutions Expert</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        HIGH PERFORMANCE WEB DESIGN
      </p>
    </div>
  </div>

  <img src="/computer.png" alt="Computer image" style={{ width: "100%", position: "relative", left: "50%", transform: "translateX(-50%)", bottom: "50px", maxWidth: "800px" }} />
  <a href='#about'>
  <div className='relative xs:bottom-0 bottom-2 w-full flex justify-center items-center z-0'>
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='w-3 h-3 rounded-full bg-secondary mb-1'
        />
      </div>
  </div>
  </a>

</section>




  );
};

export default Hero;
