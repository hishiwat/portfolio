import Career from "./components/Career";
import Product from "./components/Product";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="text-white p-8 flex flex-col items-center lg:w-2/3 mx-auto">
      <div className="flex flex-col md:flex-row w-full justify-between">
        <Career />
        <Skills />
      </div>
      <Product />
    </div>
  );
}
