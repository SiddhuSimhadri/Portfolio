import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    django,
    rest,
    postgre
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: rest,
        name: "Django rest framework",
        type: "API",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: postgre,
        name: "POstgresql",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },

    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "React.js Experience",
        company_name: "Javascript",
        icon: react,
        iconBg: "rgba(0, 0,0, 0.7)",
        date: "Frontend Development",
        points: [
            "Learnt react's statemanagement and Hooks ",
            "Advanced them by building Youtube clone and also get to know how to fetch data from API's and show them.",
            "Also build Amazon ui clone using react js and firebase.",
            "And currently building many more projects that showcases my skills. ",
        ],
    },
    {
        title: "Django Experience",
        company_name: "Python",
        icon: django,
        iconBg: "#fbc3bc",
        date: "Backend Development",
        points: [
            "Learnt django basics like templates, urls, views, Authentication and authorization, and many more",
            "Advanced them by building a fully functional Netflix clone website, in which admin can add movies and users can watch & save them. ",
            "Also build many small projects through which i have gained experience in django and python as well.",
            "Still working to build on projects that showcases my skills and solve realworld problems",
        ],
    },
    {
        title: "Django rest Framework",
        company_name: "python",
        icon: rest,
        iconBg: "#b7e4c7",
        date: "Api Development",
        points: [
            "As django rest framework is the next thing to learn after Django I've worked on it ",
            "Practised it very well by creating many apis and learnt to use them in frontend(react).",
            "Still working to build on projects that showcases my skills and solve realworld problems",
        ],
    },
    {
        title: "Full stack Development",
        company_name: "Django+React",
        icon: react,
        iconBg: "#a2d2ff",
        date: "Django & React",
        points: [
            "Learnt some technologies which are necessary for web developent which are HTML, CSS, Tailwind css, Javascript, React js, Django, PostgreSQL, etc",
            "Learnt how to integrate django and react which help in building full stack projects easily and saves much time",
            "Still working to build on projects that showcases my skills and solve realworld problems",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Full Stack Netflix clone(Django)',
        description: 'Built a complete clone of Netflix,where admin can add movies and allowing users to watch movies and save them in their watch list.',
        link: 'https://github.com/SiddhuSimhadri/Netflix-clone/tree/main/netflix_clone',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Youtube Clone(React)',
        description: 'Created a full-stack replica of YouTube, in which users can watch, search and save videos. the data is fetched form rapid api',
        link: 'https://github.com/SiddhuSimhadri/yt-clone',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Amazon UI clone(React)',
        description: 'Designed and built a UI similar as Amazon UI where admin can add products and users can view and add them to their cart',
        link: 'https://github.com/SiddhuSimhadri/Amazon-clone',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'This Portfolio Website',
        description: 'This is one of the coolest website that i have ever build. This is possible using Three js and React js',
        link: 'https://github.com/SiddhuSimhadri/Portfolio',
    },

];