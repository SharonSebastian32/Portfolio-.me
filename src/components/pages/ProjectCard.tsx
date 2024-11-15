import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: JSX.Element }[];
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 bg-white dark:bg-gray-800"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 text-center">
          {project.description}
        </p>
        <div className="flex space-x-4">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {project.title}
        </h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
