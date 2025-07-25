export default function DetailsHome() {
  return (
    <div className="max-w-3xl mx-auto mt-10 md-mt-20 px-8">
      <h1 className="font-bold text-3xl md:text-5xl text-zinc-50 max-w-3xl">
        I&apos;m a software engineer that rarely
        <span className="text-cyan-500">writes codes.</span>
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 tracking-wide">
        Meet Vansh kalra, the self-proclaimed code wizard who can turn caffeine
        into beautiful websites. His passion for building clean and functional
        designs is only rivaled by his passion for finding the perfect GIF to
        express his excitement.
      </p>
      <div className="mt-8 text-zinc-400 text-sm md:text-base max-w-2xl tracking-wide">
        Building
        <a
          href=""
          className="text-zinc-200 font-bold hover:text-cyan-500 transiton duration-500 outline-none"
        >
          Sommaire.ai
        </a>
        and
        <a
          href=""
          className="text-zinc-200 font-bold hover:text-cyan-500 transiton duration-500"
        >
          Shoppr
        </a>
        when I&apos;m not working on my day job.
      </div>
    </div>
  );
}
