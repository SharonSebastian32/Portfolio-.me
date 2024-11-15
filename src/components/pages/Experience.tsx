import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, CodeIcon } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "MERN Stack Intern",
      company: "Frugal Scientific PVT LTD ",
      location: "Calicut",
      duration: "Feb 2024 - Aug 2024",
      description:
        "Working on MERN stack projects, contributing to full-stack development.",
      icon: <BriefcaseIcon className="w-6 h-6" />,
      skills: [ "React", "Typescript", "MongoDB", "Express.js", "Node.js", "Deno", ],
    },
  {
      title: "Flutter App Developer Intern",
      company: "Futura Labs",
      location: "Remote",
      duration: "2023 - 2024",
      description:
        "Specializing in Flutter development, I design and build intuitive, high-performance mobile applications for various clients.",
      icon: <CodeIcon className="w-6 h-6" />,
      skills: ["Flutter", "Dart", "Firebase", "Android Studio"],
    },  {
      title: "Freelance Web Developer",
      company: "Self-employed",
      location: "Remote",
      duration: "2019 - 2024",
      description:
        "Developing custom web solutions for various clients, specializing in responsive and dynamic websites.",
      icon: <CodeIcon className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 rounded-xl shadow-lg mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        variants={titleVariants}
      >
        Work Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 border-none">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full"
                >
                  {exp.icon}
                </motion.div>
                <div className="flex-grow">
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {exp.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.company} | {exp.location}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0">
                  {exp.duration}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="outline"
                        className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
