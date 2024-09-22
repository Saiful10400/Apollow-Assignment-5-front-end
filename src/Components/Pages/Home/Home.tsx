
import CustomerBenifit from "../../Layouts/CustomerBenifit/CustomerBenifit";
import Customize from "../../Layouts/Customize/Customize";
import Hero from "../../Layouts/Hero/Hero";
import LatestItems from "../../Layouts/LatestItems/LatestItems";
import Advertisement from "../../Layouts/ServiceAdvertisement/Advertisement";
import TopBrands from "../../Layouts/TopBrands/TopBrands";
import UserReview from "../../Layouts/UserReview/UserReview";
import WhyMk from "../../Layouts/WhyMk/WhyMk";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Advertisement/> */}
      <CustomerBenifit/>
      <LatestItems/>
      <TopBrands/>
      <Customize/>
      <UserReview/>
      <WhyMk/>
    </>
  );
};

export default Home;
