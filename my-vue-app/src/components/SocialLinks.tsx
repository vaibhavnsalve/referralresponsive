const SocialLinks = () => {
  return (
    <div className="absolute hidden flex-col items-center justify-center top-8 right-8 gap-4 sm:flex sm:flex-col">
      <div className="flex items-center justify-center w-12 h-12 bg-[#B5D0FF] rounded-full">
        <img
          className="relative w-[1.75rem] h-[1.75rem] shrink-0 overflow-hidden fill-blue"
          alt=""
          src="../twitter-1.svg"
        />
      </div>

      <div className="flex items-center justify-center w-12 h-12 bg-[#B5D0FF] rounded-full">
        <img
          className="relative w-[1.75rem] h-[1.75rem] shrink-0 overflow-hidden fill-blue"
          alt=""
          src="../icons8discord-1.svg"
        />
      </div>
      <div className="flex items-center justify-center w-12 h-12 bg-[#B5D0FF] rounded-full">
        <img
          className="relative w-[1.75rem] h-[1.75rem] shrink-0 overflow-hidden fill-blue"
          alt=""
          src="../icons8medium-1.svg"
        />
      </div>
    </div>
  );
};

export default SocialLinks;
