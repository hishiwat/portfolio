import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="py-4 w-full md:1/2">
      <h1 className="text-3xl font-bold mb-4">スキル</h1>
      <div>
        <div className="flex items-center border rounded p-4 hover:border-yellow-200 transition duration-200">
          <FontAwesomeIcon
            icon={faJs}
            className="size-12 mr-4 text-yellow-400"
          />
          <div>
            <h2 className="text-xl font-bold">JavaScript</h2>
            <p className="text-gray-300">React, Next.js</p>
          </div>
        </div>
        <div className="flex items-center border rounded p-4 my-2 hover:border-blue-200 transition duration-200">
          <FontAwesomeIcon icon={faC} className="size-12 mr-4 text-blue-200" />
          <div>
            <h2 className="text-xl font-bold">C言語</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
