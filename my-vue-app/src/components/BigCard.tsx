import Cards from "./Cards";
import ReferralsTab from "./ReferralsTab";

const BigCard = () => {
  return (
    <div className="overflow-hidden flex flex-col pt-[1.5rem] box-border items-center justify-start">
      <div className="flex flex-col items-start justify-start gap-[2rem]">
        <div
          className="rounded-md flex flex-col sm:flex-row py-[2rem] mx-8 px-8 sm:px-8 box-border items-center justify-between sm:text-left text-center gap-4"
          style={{
            background:
              "linear-gradient(90deg, #137CE7 -65.87%, #FFFFFF 54.15%)",
          }}
        >
          <div className="flex flex-col items-center sm:items-start justify-start gap-[1.5rem]">
            <p className="text-3xl font-semibold">Refer Friends.</p>
            <p className="text-3xl font-semibold gap-2">
              Earn
              <span className="text-blue px-2">$MGP</span>
              Together
            </p>
            <div className="relative text-[0.94rem] tracking-[0.02em] leading-[162.02%] font-medium">
              Earn up to 15% of the $MGP that your friends earn on Magpie.
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.38rem] text-[1rem]">
              <div className="relative tracking-[0.02em] leading-[162.02%] font-medium">
                View referral rules
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] shrink-0 overflow-hidden"
                alt=""
                src="../chevronright.svg"
              />
            </div>
          </div>
          <div className="rounded-md bg-lavender sm:flex flex-row sm:flex-col p-[1.5rem] items-center justify-center gap-[1.5rem] text-[1rem] ">
            <div className="flex flex-col items-start justify-start gap-[1.5rem] text-[0.81rem] text-blue">
              <div className="w-[25.63rem] flex flex-row items-center justify-between">
                <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                  <button className="cursor-pointer [border:none] py-[0.5rem] px-[0.63rem] bg-blue rounded flex flex-col items-start justify-start">
                    <div className="flex flex-row items-center justify-center">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                        <div className="relative w-[1.63rem] h-[1.63rem] shrink-0 hidden">
                          <img
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                            alt=""
                            src="../binanceusdollarlogo-1@2x.png"
                          />
                        </div>
                        <div className="relative  text-[1rem] tracking-[0.02em] font-semibold font-inter text-white text-left">
                          Tier 1
                        </div>
                        <img
                          className="relative w-[1.38rem] h-[1.38rem] shrink-0 overflow-hidden hidden"
                          alt=""
                          src="../chevrondown.svg"
                        />
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-[0.56rem] px-[0.38rem] bg-goldenrod rounded h-[2.19rem] flex flex-col box-border items-start justify-between">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] shrink-0 overflow-hidden"
                        alt=""
                        src="../zap.svg"
                      />
                      <i className="relative text-[0.88rem] tracking-[0.02em] leading-[162.02%] font-semibold font-inter text-deep-blue text-left">
                        Boost 5%
                      </i>
                    </div>
                  </button>
                </div>
                <div className="flex flex-row items-center justify-center gap-[0.13rem]">
                  <div className="relative tracking-[0.02em] leading-[162.02%] font-semibold">
                    Upgrade to higher tier
                  </div>
                  <img
                    className="relative w-[1.25rem] h-[1.25rem] shrink-0 overflow-hidden"
                    alt=""
                    src="../chevronright1.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1.25rem]">
                <div className="bg-white font-semibold font-inter  rounded-md w-[12.19rem] shrink-0 flex flex-col py-[0.63rem] px-[1.25rem] box-border items-start justify-center">
                  <span className="text-blue text-[1.63rem]">5%</span>
                  <span className="text-[#658AAF]"> Your Receive</span>
                </div>
                <div className="bg-white font-semibold font-inter  rounded-md w-[12.19rem] shrink-0 flex flex-col py-[0.63rem] px-[1.25rem] box-border items-start justify-center">
                  <span className="text-blue text-[1.63rem]">0%</span>
                  <span className="text-[#658AAF]"> Friends Receive</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="relative tracking-[0.02em] leading-[162.02%] font-semibold pr-36">
                Referral Link
              </div>
              <div className="relative text-[0.88rem] [text-decoration:underline] tracking-[0.02em] leading-[162.02%] font-medium text-steelblue">
                http://accounts...dhuywuyd
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="relative tracking-[0.02em] leading-[162.02%] font-semibold pr-64">
                Share on
              </div>
              <div className="flex flex-row items-start justify-start gap-[1.25rem]">
                <img
                  className="relative w-[2rem] h-[2rem] shrink-0 object-cover"
                  alt=""
                  src="../twitter-2@2x.png"
                />
                <img
                  className="relative w-[2rem] h-[2rem] shrink-0 object-cover"
                  alt=""
                  src="../telegram-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default BigCard;
