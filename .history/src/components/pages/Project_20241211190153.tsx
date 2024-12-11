import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Globe, Github } from "lucide-react";

import chatImage from "../../assets/projects/chat.png";
import fieldesk from "../../assets/projects/fieldExecutive.png";
  import foodImage from "../../assets/projects/food.png";
import todoImage from "../../assets/projects/todo.png";
import eStoreImage from "../../assets/projects/estore.png";
import snapPost from "../../assets/projects/SnapPost.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: JSX.Element }[];
  image: string;
}
const projects: Project[] = [
  {
    title: "Field Executive Management System",
    description:
      "Fieldesk is a MERN application for managing field executives in company featuring role-based access control for Admins, Licensees, Vendors, Accountants, HR, and Field Executives. It enables task delegation, progress tracking, and performance reporting, reducing executive response time by 15 minutes per task and improving access control efficiency by 100%.",
    technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Redux Saga",
      'Berry UI',
      "Redux Toolkit",
      "Redux Persist",
      "flutter",
      'Android Studio',
    ],
    links: [
      {
        type: "Website",
        href: "https://field-executive-managemenst-system.vercel.app/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/SharonSebastian32/Field_Executive_Managemenst_System",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: fieldesk,
  },


  
  {
    title: "SnapPost",
    description:
      "SnapPost is a MERN stack social media platform designed for wildlife photographers to share their work and connect with like-minded enthusiasts. It features a secure authentication system using JWT, allowing users to create and manage profiles, upload photos, and interact with other users through likes and comments. The platform enables users to categorize their posts based on different wildlife species and locations. Additionally, SnapPost offers a search and filter function to explore specific categories of photos, and an intuitive dashboard that showcases trending posts and user statistics. It also supports real-time notifications and updates to keep users engaged",
    technologies: [
       "ejs",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
     
    ],
    links: [
      {
        type: "Website",
        href: "https://snappost-3911.onrender.com/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/SharonSebastian32/SnapPost.git",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: snapPost,
  },
  {
    title: "Chat Application",
    description:
      "I created a real-time chat application using the MERN stack, incorporating JWT authentication and Socket.io for seamless communication. Users can send messages to different users in real time, and the system provides instant notifications whenever they receive new messages, ensuring smooth and interactive conversations.",
    technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Daisy UI",
      "Socket.io",
    ],
    links: [
      {
        type: "Website",
        href: "https://sharonsebastian24.netlify.app//", //need modification
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://sharonsebastian24.netlify.app/", 
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: chatImage,
  },
  {
    title: "Food Delivery App",
    description:
      "Food Delivery App is a user-friendly application that allows users to browse and purchase food items from various menus. It features an admin section for managing products and orders, including adding new items, updating order statuses, and viewing all products. The app also includes a dummy Stripe payment integration and product filtering options for users",
    technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Stripe",
      "Zustand",
    ],
    links: [
      {
        type: "Website",
        href: "https://food-delivery-app-fe.vercel.app/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/RijoKsd/food-delivery-app",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: foodImage,
  },
  {
    title: "TODO App",
    description:
      "Todo App is a full-stack application built with the MERN stack, offering users the ability to register, log in, and reset their password using an OTP sent via email. It supports complete CRUD operations for managing todos, allows users to view pending and completed tasks, and provides options to view and edit their profile. JWT protected routes ensure secure access throughout the application.",
    technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Bootstrap",
    ],
    links: [
      {
        type: "Website",
        href: "https://todo-app-mern-fe.vercel.app/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/RijoKsd/Todo-App-Mern",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: todoImage,
  },
  {
    title: "E-Commerce Website",
    description:
      "E-Store is a React-based e-commerce site that lets users manage their cart by adding, deleting, and updating products, and completing purchases. It uses Redux Toolkit and Context API for state management, Redux Persist for localStorage, and features styling with Tailwind CSS and Daisy UI. The app includes smooth animations",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Daisy UI",
      "Redux Toolkit",
      "Redux Persist",
    ],
    links: [
      {
        type: "Website",
        href: "https://react-estore-app.vercel.app/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/RijoKsd/E-Store",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: eStoreImage,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className=" w-full max-w-6xl  ">
      <div className="container mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        >
          My Projects
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
