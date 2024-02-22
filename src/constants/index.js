import {
  
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    mysql,
    esports,
    Books4u,
    
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Writing",
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
      name: "MongoDB",
      icon: mongodb,
    },

    {
      name: "git",
      icon: git,
    },
    
    {
      name: "MySql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title:"Fullstack Developer",
      company_name: "eSportsPortal",
      icon: esports,
      iconBg: "#E6DEDD",
      date:"July-Aug 2023",
      points: [
        "Developed and customized a homepage, login page, proﬁle page, search section, coach dashboard and its functionalities.",
        "Implemented Redux for state management and JWT for authentication/authorization of different user roles and functionalities",
        "Integrated RESTApi(Khalti) as a payment gateway.",
        "Used Git for version control and hosted via Vercel."
      ],
    },
    {
      title:"Test Developer",
      company_name: "coming soon",
      icon: null,
      iconBg: "#E6DEDD",
      date:"coming soon",
      points: ["coming soon"],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Coming Soon",
      name: "Coming soon",
      designation: "Xyz",
      company: "Abc.co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    }, 
    {
      testimonial:
        "Coming Soon",
      name: "Coming soon",
      designation: "Xyz",
      company: "Abc.co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "eSportsPortal",
      description:
        "A central hub for all the e-Sports related news, updates and more.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "blue-text-gradient",
        },
      ],
      image: esports,
      source_code_link: "https://github.com/tamago01/eSportsportal-forum-MERN",
    },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    {
      name: "Books4u",
      description:
        "An ecommerce book store where you can shop books from the comfort of your home.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "red-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Books4u,
      source_code_link: "https://github.com/tamago01/Books4u--A-Responsive-Ecommerce-site-",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };