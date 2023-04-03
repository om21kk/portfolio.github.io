import {
    mobile,
    backend,
    creator,
    web,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Problem Solving",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data-Structures and Algorithms",
      icon: creator,
    },
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "IIIT Kancheepuram",
      company_name: "B-tech in Smart Manufacturing",
      date: "August 2020 - present",
      icon: tesla,
      
      iconBg: "#E6DEDD",
      points: [

        "CGPA-8.02(till 5th sem)"
      ],
    },
    {
      title: "Golden Kids College",
      company_name: "12th board(Maharashtra State Board)",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "February 2019",
      points: [

        "Percentage-76.7%"
      ],
    },
    {
      title: "Tomoae School",
      company_name: "10th board(ICSE)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "April 2017",
      points: [

        "Percentage-89.66%"]
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Deezer",
      description:
      "React.JS music player app with Discover page to select genre and top songs. Includes top artists and charts. Full music player with playback options like previous/next song, repeat, shuffle, volume control, and more.Has search functionality to search the specific song/artists.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "restAPI",
          color: "blue-text-gradient",
        },

      ],
      image: carrent,
      source_code_link: "https://lucent-parfait-abdfb7.netlify.app/",
    },
    {
      name: "IMAGIN-E-AI",
      description:
        "A Full stack AI image generation app using MERN.It has ability to create new AI generated images by entering absolutly any text you wish.Once image is generated you can add it to your showcase where it will be shared to your community where you can perform CRUD operation for images.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "openAI-api",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Cafeteria Service",
      description:
        "Cafeteria Services Application,designed exclusively for ourinstitute!With this app, students can now easily browse through items available on cafe menu.Application has search functionality so students can quickly find their desired item. Once found, students can easily place their orders",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };