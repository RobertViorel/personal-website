import {
    develop,
    done,
    phone,
    digital,
    webdev,
    design,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    github,
    tick,
    link,
    farmatek,
    photobost,
    birds,
    boxa,
    vilalisjak,
    diginex,
    graphic,


  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "prices",
      title: "Prices",
    },

    {
      id: "contact",
      title: "Contact",
    },

  ];

  const services = [
    {
      title: "Graphic Design",
      text: "Professional custom graphic design, including logos, social media posts, and more.",
      icon: design,
    },
    {
      title: "Web Development",
      icon: webdev,
      text: "Crafting professional static or dynamic websites tailored for individuals, ensuring full responsiveness across all devices.",
    },

    {
      title: "Digital Marketing",
      icon: digital,
      text: "From creating Google ad campaigns that drive traffic and conversions to crafting social media ads that captivate audiences.",
    },

  ];

  const prices = [
    {
      index: 0,
      name: "Graphic Design",
      description: "Logos, social media banners, posters, etc.",
      package_01: "starting at",
      package_01_price: "€ 99",
      points_heading: "",
      points: [ ],

    },
    {
      index: 0,
      name: "Basic Package",
      description: "Single-page website based on your own design.",
      package_01: "starting at",
      package_01_price: "€ 499",
      points_heading: "Includes",
      points: [
        { text: "Designing and developing your website with HTML, CSS, and JS.", icon: tick },
        { text: "Deployment on your own server", icon: tick },
        { text: "Up to 1-week support", icon: tick },
      ],

    },
    {
      index: 0,
      name: "Premium Package",
      description: "Designing and developing a custom, up to 3-page website using your preferred framework.",
      package_01: "starting at",
      package_01_price: "€ 999",
      points_heading: "Includes",
      points: [
        { text: "Individual design", icon: tick },
        { text: "SEO optimization", icon: tick },
        { text: "Expert setup of your server for seamless website deployment", icon: tick },
        { text: "Configuration of your personalized domain email address for a professional online presence", icon: tick },
        { text: "2 weeks of support", icon: tick },

      ],
    },
    // Add more price objects as needed
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "Free Strategy Advice",
      icon: phone,
      iconBg: "#d0b870",
      date: "Step 1",
      points: [
        "I provide a personal initial consultation via phone, Zoom or Skype, during which we assess your project requirements and collaboratively develop initial concepts.",
      ],
    },
    {
      title: "Your Personalized Cost Estimate",
      icon: develop,
      iconBg: "#d0b870",
      date: "Step 2",
      points: [
        "Within 3 working days, you'll receive an individual cost estimate tailored to your project's specific requirements. My offers are modular, providing you the flexibility to adjust the project's scope according to your needs.",
      ],
    },
    {
      title: "Realizing Your Online Presence",
      icon: graphic,
      iconBg: "#d0b870",
      date: "Step 3",
      points: [
        "Once the website design is finalized, I begin the development phase. I meticulously code your responsive website or online shop to meet your specific needs. Throughout the process, I perform quality assurance checks to ensure your online presence exceeds performance standards and your expectations.",

      ],
    },
    {
      title: "Deploying Your Website",
      icon: done,
      iconBg: "#d0b870",
      date: "Step 4",
      points: [
        "Upon the completion of the project, we will conduct a comprehensive review of the results together, implementing any final change requests as needed. The success story of your website unfolds with the seamless transfer from my development server to your live server. Rest assured, i remain fully committed to accompanying you every step of the way.",

      ],
    },
  ];

  //Price List





  const projects = [

    {
      name: "Boxa Travel",
      description:
        "Boxatravel is a Web 3.0-based travel booking engine that supports crypto payments. This app was built by a full team of developers. It was a startup I founded a few years ago that unfortunately didn't have the chance to take off. My involvement was solely in the front-end development. Currently, the code is publicly available on GitHub and may be used for personal purposes ONLY.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: boxa,
      linkIcon: github,
      source_code_link: "https://github.com/Robert051998/Boxa-Travel",
    },
    {
      name: "Vila Lisjak",
      description:
        "Vila Lisjak is a beautifully designed building featuring seven luxurious apartments available for short-term rentals. I developed the website for Vila Lisjak using HTML, CSS, JavaScript, and Bootstrap, ensuring a seamless and user-friendly experience for visitors",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: vilalisjak,
      linkIcon: link,
      source_code_link: "https://vilalisjak.com",
    },
    // {
    //   name: "Diginex",
    //   description:
    //     "A showcase of innovation and creativity. Our website, crafted with React and Three.js, represents our commitment to excellence in web development.",
    //   tags: [
    //     {
    //       name: "React",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "threeJS",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: diginex,
    //   linkIcon: github,
    //   source_code_link: "https://github.com/Robert051998/diginex",
    // },

    // {
    //   name: "Farmateket",
    //   description:
    //     "Farmateket is a Norwegian online shop for nutritional supplements, offering a wide range of payment options, including PayPal, Klarna, Swrill, and more.",
    //   tags: [
    //     {
    //       name: "PHP",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mySQL",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Bootstrap",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: farmatek,
    //   linkIcon: link,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Photo Boost",
    //   description:
    //     "A snippet that enables you to edit photos without compromising their quality. The main software was developed using Laravel and Python.",
    //   tags: [
    //     {
    //       name: "WordPress",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Ocean Theme",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Elementor",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: photobost,
    //   linkIcon: link,
    //   source_code_link: "https://photoboost.co/",
    // },
    // {
    //   name: "Early Birds Properties",
    //   description:
    //     "A comprehensive real estate portal built on WordPress that caters to the diverse needs of property owners and customers.",
    //   tags: [
    //     {
    //       name: "WP",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mySQL",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Elementor",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: birds,
    //   linkIcon: link,
    //   source_code_link: "https://earlybirdsproperties.com/",
    // },
  ];

  export { services, technologies, experiences, prices, projects };
