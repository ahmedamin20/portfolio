import {
  backend,
  creator,
  css,
  ena,
  es6,
  git,
  html,
  javascript,
  mobile,
  reactjs,
  redux,
  sass,
  web
} from "../assets";
import arrows from "../assets/arrowsBanner.png";
import drcode from "../assets/drcode.png";
import eliteSmile from "../assets/elitesmileDashboard.png";
import mui from "../assets/mui.png";
import rayedDashboard from "../assets/rayedDahsboard.png";
import wadjet from "../assets/wadjetBanner.png";
import ymtazLogo from "../assets/ymtaz.svg";
import ymtaz from "../assets/ymtazBanner.png";
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
  {
    id: "https://drive.google.com/file/d/1AFN-bmzaZP-63OKRCci8S35xSgUsG2IU/view?usp=drive_link",
    title: "Resume",
  },
];

const services = [
  {
    title: "Fast",
    icon: web,
  },
  {
    title: "High SEO",
    icon: mobile,
  },
  {
    title: "Accessible",
    icon: creator,
  },
  {
    title: "Responsive",
    icon: backend,
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
    name: "git",
    icon: git,
  },
  {
    name: "ES6",
    icon: es6,
  },
  {
    Name: "SASS",
    icon: sass,
  },
  {
    Name: "MUI",
    icon: mui,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Arkan-tech",
    icon: ymtazLogo,
    iconBg: "#383E56",
    date: "jul 2024 - present",
    points: [
      "Developing and maintaining web applications using nextks, taiwindcss, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "projects:",
      <a
        style={{ color: "skyblue" }}
        href="https://ymtaz.ahmedamin.tech/"
        target="_blank"
      >
        Ymtaz
      </a>,
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Dr code",
    icon: drcode,
    iconBg: "#eeeeee",
    date: "may 2023 - present",
    points: [
      "Developing and maintaining web applications using React, MUI, ReduxToolKit and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "projects:",
      <a
        style={{ color: "skyblue" }}
        href="https://admin.ksbgarage.com/"
        target="_blank"
      >
        KSB admin Dashboard
      </a>,
      <a
        style={{ color: "skyblue" }}
        href="https://endohup-production.vercel.app/"
        target="_blank"
      >
        Edno-Hub Medical Website
      </a>,
      <a
        style={{ color: "skyblue" }}
        href="https://admin.eductor.org/"
        target="_blank"
      >
        Educator admin Dashboard
      </a>,
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Enactus Modern Academy",
    icon: ena,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using HTML, Css, JavaScript and other related technologies.",
    ],
  },
];

const projects = [
  {
    name: "Rayed Dashboard",
    description: `
    Rayed business model is solely focused on the hyperlocal on-demand service of the food delivery sector.
    `,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Zustand",
        color: "blue-text-gradient",
      },
      {
        name: "firebase notifications",
        color: "green-text-gradient",
      },
      {
        name: "leaflet map",
        color: "pink-text-gradient",
      },
      {
        name: "pusher realtime",
        color: "blue-text-gradient",
      },
      {
        name: "next intl",
        color: "green-text-gradient",
      },
    ],
    image: rayedDashboard,
    source_code_link: "https://admin.rayed.net",
  },
  {
    name: "Wadjet",
    description: `
    Colorful and animated landing page
    `,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Lottie",
        color: "blue-text-gradient",
      },
      {
        name: "Marquee",
        color: "green-text-gradient",
      },
      {
        name: "excel sheet api",
        color: "pink-text-gradient",
      },
    ],
    image: wadjet,
    source_code_link: "https://wadjetapp.com/",
  },
  {
    name: "Ymtaz",
    description: `The project is divided into a service provider and a service requester.It contains visual consultation, firebase
notifications, and many other features.
`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "HMVC Architecture pattern",
        color: "green-text-gradient",
      },
      {
        name: "react query",
        color: "pink-text-gradient",
      },
      {
        name: "nexti18intl",
        color: "blue-text-gradient",
      },
    ],
    image: ymtaz,
    source_code_link: "https://ymtaz.ahmedamin.tech",
  },
  {
    name: "EliteSmile admin dashboard",
    description: `Dashboard CRUD Systems To manage Elite Smile Dental Clinic In 6-October zayed Official site
`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "blue-text-gradient",
      },
      {
        name: "HMVC Architecture pattern",
        color: "blue-text-gradient",
      },
    ],
    image: eliteSmile,
    source_code_link: "http://dashboard.elitesmiles.org/",
  },
  {
    name: "Arrows",
    description: `website for a company that provides services in the field of programming, design, and marketing.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: arrows,
    source_code_link: "https://portal.arrowsegypt.com/",
  },
  // {
  //   name: "IMDB MovieApp",
  //   description:
  //     "You can Track all New top movies and see Rating,Description and movie Trial you can play the movie on IMDB WebSite",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "JSX",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Ajax",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: imdb,
  //   source_code_link: "https://github.com/ahmedamin20/Movie-Clone-app-React",
  // },
  // {
  //   name: "Dark Mode",
  //   description:
  //     "Responsive Dark Mode website to Book Hotels in Maldives By complete your Registration form ",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Sass",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: dark,
  //   source_code_link: "https://github.com/ahmedamin20/Maldives.darkmode",
  // },
  // {
  //   name: "E-commerce ",
  //   description:
  //     "Responsive e-commerce You can Buy what all you need for men and women Like clothes or Accessories for men and women",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: eco,
  //   source_code_link: "https://github.com/ahmedamin20/Ecommerce",
  // },
  // {
  //   name: "Security Guard",
  //   description:
  //     "Responsive Security WebSite you can book or rate any of there serves to secure company or streets or Homes or Villas",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: secure,
  //   source_code_link: "https://github.com/ahmedamin20/Security-Gaurd-WebSite",
  // },
  // {
  //   name: "Food.",
  //   description:
  //     "Responsive Restaurant WebSite you can see chefs rating and see Restaurant Dishes and there ratings also you can contact the Restaurant for giving them your feedback",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: food,
  //   source_code_link: "https://github.com/ahmedamin20/Ecommerce",
  // },
  // {
  //   name: "Gaming",
  //   description:
  //     "Responsive and creative WebSite to download Games with animated form and logo suitable for gamers",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "PHP",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: game,
  //   source_code_link: "https://github.com/ahmedamin20/Gamers",
  // },
];

export { experiences, projects, services, technologies };

