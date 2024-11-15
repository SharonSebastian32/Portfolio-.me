import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import IconCloud from "@/components/magicui/icon-cloud";
import { useInView } from "react-intersection-observer";

const slugs = [
  "typescript",
  "javascript",
  "nextdotjs",
  "postman",
  "mongodb",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "prisma",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];

const SkillsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-background rounded-xl shadow-lg mt-10   mb-6"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200"
        variants={itemVariants}
      >
        Skills
      </motion.h2>

      <div className="flex flex-col items-center justify-center space-y-6">
        <motion.div
          className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-4 py-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <IconCloud iconSlugs={slugs} />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2"
          variants={itemVariants}
        >
          {slugs.map((slug, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Badge
                variant="outline"
                className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-sm sm:text-base px-3 py-1 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {slug.charAt(0).toUpperCase() + slug.slice(1)}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
