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
  vehiclerental,
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
    title: "Frontend Developer",
    company_name: "Render Booking Pvt. Ltd.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3mdgtprFFg8ifRzBBetSyNf_diAPkWDZMNe6mgWvyA&s",
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Developed responsive user interfaces for Render Booking's web application using HTML5, CSS3, and JavaScript.",
      "Collaborated with designers and backend developers to implement user-friendly features and ensure seamless integration between frontend and backend systems.",
      "Implemented client-side form validations and error handling using Formik, to improve user experience and data integrity.",
      "Utilized modern frontend libraries such as Shadcn and MUI to build dynamic and interactive components.",
      "Optimized website performance and loading speeds through techniques like code splitting, lazy loading, and image optimization.",
      "Actively participated in Agile development methodologies, including sprint planning, daily stand-ups, and retrospectives.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "eSportsPortal",
    icon: esports,
    iconBg: "#E6DEDD",
    date: "Apr-Oct 2023",
    points: [
      "Developed and customized a homepage, login page, proﬁle page, search section, coach dashboard and its functionalities.",
      "Implemented Redux for state management and JWT for authentication/authorization of different user roles and functionalities",
      "Integrated RESTApi(Khalti) as a payment gateway.",
      "Used Git for version control and hosted via Vercel.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Coming Soon",
    name: "Coming soon",
    designation: "Xyz",
    company: "Abc.co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Coming Soon",
    name: "Coming soon",
    designation: "Xyz",
    company: "Abc.co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  
  {
    name: "Vehicle Rental",
    description:
      "An online platform for all the vehicle rental related services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "jira",
        color: "pink-text-gradient",
      },
    ],
    image: vehiclerental,
    source_code_link: "https://renderbooking.com/",
  },
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
    source_code_link:
      "https://github.com/tamago01/Books4u--A-Responsive-Ecommerce-site-",
  },
];

export { services, technologies, experiences, testimonials, projects };
