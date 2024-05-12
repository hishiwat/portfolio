import React from "react";
import Image from "next/image";
import Link from "next/link";

const Products = [
  {
    title: "FlipSnap",
    description:
      "パブリック性とクローズド性を兼ね備えたひっくり返せるという新しい写真共有SNS。写真は表/裏の2枚1組で投稿し,表は誰でも閲覧可能だが,裏は相互フォローでないと閲覧できないというものです。フロントエンドを担当しました。技育CAMP2024ハッカソン Vol.2で最優秀賞をいただき，技育博にも参加しました。",
    image: "/FlipSnap.jpg",
    url: "https://flipsnap.vercel.app/",
    github: "https://github.com/k7oya14/flipsnap",
  },
];

const Product = () => {
  return (
    <div id="product" className="py-4 w-full">
      <h1 className="text-3xl font-bold mb-4">制作物</h1>
      <div className="px-12">
        {Products.map((product) => (
          <div
            key={product.title}
            className="flex flex-col items-center border rounded p-4 transform hover:scale-[1.01] transition duration-300 "
          >
            <Image
              className="p-2 w-full h-full object-cover"
              style={{ borderRadius: "1rem" }}
              width={200}
              height={200}
              alt=""
              src={product.image}
            />
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-gray-300">{product.description}</p>
              <div className="flex space-x-4 items-center justify-center">
                <Link
                  href={product.url}
                  className="text-gray-300 hover:text-gray-50 transition duration-200"
                >
                  Link
                </Link>
                <Link
                  href={product.github}
                  className="text-gray-300 hover:text-gray-50 transition duration-200"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
