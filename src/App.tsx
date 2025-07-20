import { useState } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { TagList } from "@/components/TagList";

export default function App() {
  const [tags, setTags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <Hero />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
