import { useCallback } from "react";
import SearchBar from "@/components/SearchBar";
import { IMAGES } from "@/constants/images";

const { heroBackground } = IMAGES;

const Hero = () => {
  const onSearch = useCallback((search: string) => {
    console.log(search);
  }, []);

  return (
    <section
      className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8"
      aria-label="Hero section"
    >
      <img
        src={heroBackground}
        alt="Dictionary hero background"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Search for words, phrases and meanings
        </h1>
        <div className="w-full max-w-xl mt-6">
          <SearchBar initialValue="" onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
