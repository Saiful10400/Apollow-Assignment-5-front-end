import avatar from "../../../assets/aboutUs/avatar.png";
import CenterAlign from "../../Helper/CenterAlign";

const AboutUs = () => {
  return (
    <div className="min-h-[70vh]">
      <CenterAlign>
        {/* div that contain all float element. */}

        <div  className="flex px-4 lg:px-0 items-start flex-col-reverse lg:flex-row justify-center">
          <div data-aos="fade-right" className="lg:w-1/2 w-full mt-20">
            <h1 className="lg:text-6xl text-4xl lg:text-left text-center font-normal">About MECHA</h1>
            <p className="mt-4 text-lg lg:text-left text-center lg:text-xl">
              We are committed not only to bringing you the best about
              mechanical keyboards, also turning the best designs into real
              products.
            </p>

            <div className="flex flex-col lg:flex-row gap-5 mt-7 p-5 border border-[#0000003f] rounded-lg">
              <div className="w-full bg-gradient-to-tr p-5 rounded-lg from-[#cfcfcf57] to-[#afafaf93]">
                <h1 className="text-orange-500">Our vision</h1>
                <h1 className="text-2xl font-semibold">
                  become the destination for keyboard enthusiasts.
                </h1>
                <p className="mt-5">
                  Our vision is to become the go-to destination for keyboard
                  enthusiasts around the world, offering the most diverse,
                  innovative, and customizable mechanical keyboards and
                  accessories.
                </p>
              </div>
              <div className="w-full bg-gradient-to-tr p-5 rounded-lg from-[#cfcfcf57] to-[#afafaf93]">
                <h1 className="text-orange-500">Our vision</h1>
                <h1 className="text-2xl font-semibold">
                  become the destination for keyboard enthusiasts.
                </h1>
                <p className="mt-5">
                  Our vision is to become the go-to destination for keyboard
                  enthusiasts around the world, offering the most diverse,
                  innovative, and customizable mechanical keyboards and
                  accessories.
                </p>
              </div>
            </div>
          </div>


          <div data-aos="fade-left" className="lg:w-1/2 w-full text-center">
            <img
              className="w-[70%] inline-block"
              src={avatar}
              alt="about-us-page-avatar"
            />
            <div className="inline-grid grid-cols-2 lg:w-[70%] p-5 mt-5 gap-5 border border-[#0000003f] rounded-lg">
              <div className="bg-gradient-to-tr from-[#cfcfcf57] to-[#afafaf93] p-3 rounded-lg">
                <h1 className="text-5xl">3.5</h1>
                <h1 className="text-lg">Years Experience</h1>
              </div>
              <div className="bg-gradient-to-tr from-[#cfcfcf57] to-[#afafaf93] p-3 rounded-lg">
                <h1 className="text-5xl">2.6 K</h1>
                <h1 className="text-lg">Total Review.</h1>
              </div>
              <div className="bg-gradient-to-tr from-[#cfcfcf57] to-[#afafaf93] p-3 rounded-lg">
                <h1 className="text-5xl">7.9 K</h1>
                <h1 className="text-lg">Total Customer.</h1>
              </div>
              <div className="bg-gradient-to-tr from-[#cfcfcf57] to-[#afafaf93] p-3 rounded-lg">
                <h1 className="text-5xl">14</h1>
                <h1 className="text-lg">Branch in USA</h1>
              </div>
            </div>
          </div>
        </div>
      </CenterAlign>
    </div>
  );
};

export default AboutUs;
