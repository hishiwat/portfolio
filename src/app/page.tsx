import Career from "./components/Career";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <div className="hidden sm:block">
        <Hero />
      </div>
      <div className="text-white px-4 flex flex-col items-center lg:w-2/3 mx-auto">
        <div className="sm:hidden">Ishiwata Hikaru&apos;s Portfolio</div>
        <div className="flex flex-col md:flex-row w-full justify-between">
          <Career />
          <Skills />
        </div>
        <Product />
      </div>
    </>
  );
}
