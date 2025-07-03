const navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between sm:justify-between py-8 px-8 max-w-5xl mx-auto relative z-[100]">
      <div className="hidden lg:flex w-full justify-between">
        <div className="">
          <div className="">
            <div>Photo</div>
            <a href="">About</a>
            <a href="">projects</a>
            <a href="">Skills</a>
            <a href="">Blogs</a>
          </div>
          <a className="">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
