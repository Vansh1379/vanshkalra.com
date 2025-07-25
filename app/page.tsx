import DetailsHome from "@/components/Home/details";
import Navbar from "../components/Home/navbar";
import ExperienceHome from "@/components/Home/experienceHome";

export default function Home() {
  return (
    <div className="bg-zinc-900 min-h-screen antialiased">
      <div className=" ">
        <Navbar />
        <DetailsHome />
        <ExperienceHome />
        <div className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto px-8  mt-40">
          I&apos;ve been building a lot of things
        </div>
      </div>
    </div>
  );
}
