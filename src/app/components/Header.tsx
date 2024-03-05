import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex text-white p-4 items-center justify-between">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex space-x-8 justify-between invisible sm:visible">
        <Link
          href="#career"
          className="hover:opacity-80 transition duration-200"
        >
          経歴
        </Link>
        <Link
          href="#skills"
          className="hover:opacity-80 transition duration-200"
        >
          スキル
        </Link>
        <Link
          href="#product"
          className="hover:opacity-80 transition duration-200"
        >
          制作物
        </Link>
      </div>
    </div>
  );
};

export default Header;
