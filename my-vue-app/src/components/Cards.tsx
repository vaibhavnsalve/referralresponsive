const Cards = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-[1.25rem] text-blue mt-8 ">
      <div className="flex flex-row items-start justify-start gap-[1.25rem]">
        <div className="flex flex-row items-start justify-start ">
          <div className="bg-white font-semibold font-inter rounded-md px-14 shrink-0 flex flex-col py-6 sm:px-20 box-border items-start justify-center">
            <span className="text-blue text-2xl">5%</span>
            <span className="text-[#658AAF]"> Your Receive</span>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.25rem]">
          <div className="bg-white font-semibold font-inter rounded-md px-14 shrink-0 flex flex-col py-6 sm:px-20 box-border items-start justify-center">
            <span className="text-blue text-2xl">0.0%</span>
            <span className="text-[#658AAF]">Total Rewards</span>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white shrink-0 flex flex-row p-6 px-9 box-border items-center justify-start">
        <div className="flex flex-row items-center justify-center gap-8">
          <img
            className="relative  shrink-0 overflow-hidden"
            alt=""
            src="../token-logo.svg"
          />
          <div className="flex flex-col items-start justify-center">
            <div className="relative font-semibold">0 MGP</div>
            <div className="relative font-medium text-steelblue text-left flex items-center">
              Your Rewards
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-2 bg-blue rounded-md  shrink-0 flex flex-row box-border items-center justify-center ml-4 ">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1rem] tracking-[0.02em] font-semibold font-inter text-white text-left inline-block">
            Claim Rewards
          </button>
        </button>
      </div>
    </div>
  );
};

export default Cards;
