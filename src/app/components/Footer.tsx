import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mx-auto text-white p-4 lg:w-2/3">
      <div className="border-t border-white w-full my-4" />
      <div className="flex items-center justify-between w-2/3">
        <p className="text-sm font-light">&copy; 2024 Portfolio</p>
        <Link href="https://github.com/hishiwat?tab=repositories">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-7 h-7 text-gray-300 transition duration-500 hover:text-gray-50 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
