import BigCard from "./BigCard";
import Cards from "./Cards";
import ReferralsTab from "./ReferralsTab";
import SocialLinks from "./SocialLinks";

const Referral = () => {
  return (
    <div
      className="relative bg-white w-full h-screen text-center text-deep-blue font-inter"
      style={{
        backgroundImage: "url(../bkg.svg)",
      }}
    >
      <SocialLinks />
      <BigCard />
      <ReferralsTab />
    </div>
  );
};

export default Referral;
