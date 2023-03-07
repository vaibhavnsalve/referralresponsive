const Nav = () => {
  return (
    <nav className=" flex flex-row border-b-2 py-4 px-8 bg-[#F0F6FF] items-center">
      <div className="block sm:hidden">
        <h1
          className="text-2xl font-semibold"
          style={{
            background:
              "linear-gradient(179.91deg, #062049 -38.71%, #1776D0 135.87%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Magpie
        </h1>
      </div>
      <div className="hidden sm:block">
        <img src="./logo.svg" alt="logo" />
      </div>
      <div className="hidden md:block items-center">
        <ul className="gap-4">
          <li className="inline-block px-4 text-[#0B366B] font-medium">
            <a href="#">Stake</a>
          </li>
          <li className="inline-block px-4 text-[#0B366B] font-medium">
            <a href="#">Claim</a>
          </li>
          <li className="inline-block px-4 text-[#0B366B] font-medium">
            <a href="#">Lock</a>
          </li>
          <li className="inline-block px-4 text-[#0B366B] font-medium">
            <a href="#">Stake</a>
          </li>
          <li className="inline-block px-4 text-[#0B366B] font-medium">
            <a href="#">Docs</a>
          </li>
          <li className="inline-block px-4 text-[#0B366B] font-medium">
            <a href="#">Governance</a>
          </li>
          <li className="inline-block px-4 text-[#0B366B] font-medium">
            <a href="#">Bribe</a>
          </li>
          <li className="inline-block px-4 text-[#137CE7] font-medium">
            <a href="#">Referral</a>
          </li>
          <li className="inline-block px-4 py-2  text-[#1FB488] font-medium border-[#1FB488] border rounded">
            <div className="flex flex-row">
              {/* <img src="./safety.svg" alt="safety" className="" /> */}
              <a href="#">Audited</a>
            </div>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex flex-row items-center ml-auto">
        <p className="mr-4">EN</p>
        <div className="bg-[#1776D0] rounded-full px-4 py-2">
          <h1 className="text-white font-medium">0xFA42.......439de</h1>
        </div>
        <img src="./moon.svg" alt="wallet" className="ml-4" />
      </div>

      <div className="md:hidden flex flex-row items-center ml-auto">
        <div className="flex flex-row items-center">
          <img src="./small.svg" alt="wallet" className="ml-4" />
          <p className="ml-2 font-medium">$ 0.0</p>
        </div>
        <div className="flex flex-row items-center">
          <img
            src="./8zHkPqxTR3OICrlj3dXL_b69i9XJFD6k10x6U 3.png"
            alt="wallet"
            className="ml-4"
          />
          <p className="ml-2 font-medium">$ 0.0</p>
        </div>
        <div className="flex flex-row items-center">
          <img src="./wallet.svg" alt="wallet" className="ml-4" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
