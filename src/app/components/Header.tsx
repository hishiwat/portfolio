import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex p-4 items-center justify-between">
      <h1 className="text-gray-100 text-2xl font-bold">Portfolio</h1>
      <div className="flex space-x-8 text-gray-200 justify-between invisible sm:visible">
        <Link
          href="#career"
          className="hover:text-white transition-all duration-200"
        >
          経歴
        </Link>
        <Link
          href="#skills"
          className="hover:text-white transition-all duration-200"
        >
          スキル
        </Link>
        <Link
          href="#product"
          className="hover:text-white transition-all duration-200"
        >
          制作物
        </Link>
      </div>
    </div>
  );
};

export default Header;
