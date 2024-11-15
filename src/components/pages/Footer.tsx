import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" border rounded-xl max-w-6xl w-full py-4 mb-14 "
    >
      <div className="max-w-4xl mx-auto px-4 ">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="flex justify-center items-center space-x-4 text-sm"
        >
          <a
            href="tel:+918589914973"
            className="p-2 hover:text-purple-600 transition-colors"
            aria-label="Call Sharon Sebastian"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="mailto:sharonsebastian81@gmail.com"
            className="p-2 hover:text-purple-600 transition-colors"
            aria-label="Email Rijo Sebastian"
          >
            <Mail className="h-5 w-5" />
          </a>
          <span className="flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> by
            <a
              href="https://www.instagram.com/rijo_ksd/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-semibold hover:underline"
            >
             Sharon Sebastian
            </a>
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
