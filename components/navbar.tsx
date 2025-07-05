import Image from "next/image";
import vansh from "../public//vansh.png";

const navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between sm:justify-between py-8 px-8 max-w-5xl mx-auto relative z-[100]">
      <div className="hidden lg:flex w-full justify-between">
        <div className="flex flex-row items-center space-x-8 antialiased border px-4 py-2 rounded-2xl bg-zinc-800 border-zinc-700/60">
          <a className="font-bold text-sm flex items-center justify-center space-x-2 text-white hover:text-zinc-300 transition-all duration-200 ease-in-out">
            <Image
              src={vansh}
              alt="vansh"
              height={30}
              width={30}
              className="transition-all duration-500 rounded-full blur-0 scale-100"
            />
            <span className="font-inter font-bold">Vansh Kalra</span>
          </a>
          <a href="/about" className="text-white text-sm relative">
            <span className="realtive z-10 px-2 py-2 inline-block">About</span>
          </a>
          <a href="/projects" className="text-white text-sm relative">
            <span className="realtive z-10 px-2 py-2 inline-block">
              Projects
            </span>
          </a>
          <a href="/skills" className="text-white text-sm relative">
            <span className="realtive z-10 px-2 py-2 inline-block">Skills</span>
          </a>
          <a href="/blogs" className="text-white text-sm relative">
            <span className="realtive z-10 px-2 py-2 inline-block">Blogs</span>
          </a>
        </div>
        <a
          className="font-medium text-white inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-[#464d55] to-[#25292e] text-sm px-4 py-2 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80"
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default navbar;
