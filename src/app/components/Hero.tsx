"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[80vh] w-full overflow-hidden text-white"
    >
      <div className="relative inset-0 mt-[5vh] h-[70vh] flex items-center justify-center mx-auto px-8">
        <div className={` w-full max-w-xl text-center`}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl font-bold mb-4 relative"
          >
            Ishiwata Hikaru's Portfolio
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg mb-4 relative"
          >
            <Link
              href="#career"
              className="text-gray-300 hover:text-white transition-all duration-200"
            >
              About Me
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-[85vh]"
        >
          <Image
            width={500}
            height={500}
            unoptimized
            priority={true}
            className="w-[98%] object-contain mx-auto hover:size-[100%] transition-all duration-300 ease-in-out"
            alt="hero image"
            src={"Hero.svg"}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
