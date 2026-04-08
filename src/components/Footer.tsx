import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300">
            VK
          </span>
          <span className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} Vansh Kalra
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/Projects"
            className="text-sm text-neutral-600 hover:text-teal-400 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="/Work"
            className="text-sm text-neutral-600 hover:text-teal-400 transition-colors duration-200"
          >
            Work
          </Link>
          <a
            href="https://github.com/Vansh1379"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 hover:text-teal-400 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vansh-kalra-626444228"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 hover:text-teal-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vanshkalra1379@gmail.com"
            className="text-sm text-neutral-600 hover:text-teal-400 transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
