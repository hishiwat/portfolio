import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div id="product" className="py-4 w-full">
      <h1 className="text-3xl font-bold mb-4">制作物</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={index}
            className="flex flex-col items-center border rounded p-4 transform hover:scale-105 transition duration-300 "
          >
            <Image
              className="p-2 rounded-lg"
              style={{ borderRadius: "1rem" }}
              width={300}
              height={300}
              alt=""
              src={`https://source.unsplash.com/collection/1346951/1000x1000?sig=${index}`}
            />
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold">作品{index}</h2>
              <p className="text-gray-300">Reactを用いて何とかをしました。</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
