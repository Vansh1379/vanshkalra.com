"use client";
import React, { useState } from "react";
import Button from "./helper/Button";
import Hamburger from "./helper/Hamburger";
import Link from "next/link";
import { navLinks } from "@/constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div className="flex justify-between items-center text-white max-w-7xl mx-auto px-4 py-3">
          <Link href="/" className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300 hidden lg:block">
            VK
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.filter(l => l.title !== "Resume").map((link) => (
              <Link
                href={link.id}
                key={link.id}
                className="px-4 py-2 text-sm text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button />
          </div>

          <div className="lg:hidden flex flex-1 justify-between items-center">
            <Link href="/" className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300">
              VK
            </Link>
            <div className="flex items-center gap-2">
              <Button />
              <Hamburger onClick={() => setToggle(!toggle)} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          toggle ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="backdrop-blur-xl bg-black/80 border-b border-white/5 px-4 py-2">
          {navLinks.filter(l => l.title !== "Resume").map((link) => (
            <Link
              href={link.id}
              key={link.id}
              onClick={() => setToggle(false)}
              className="block px-4 py-3 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
