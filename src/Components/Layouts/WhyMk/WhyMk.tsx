import React from "react";
import CenterAlign from "../../Helper/CenterAlign";
import getWhyMk from "./Demo";
import Tittle from "../../Ui/Tittle";

const WhyMk = () => {
  return (
    <CenterAlign>
      <Tittle text="Why Choose Mechanical Keyboards?" />
      <div>
        <div className="lg:px-0 lg:pl-7 px-4 ">
          {getWhyMk()?.map((item, idx) => {
            return (
              <h1 className="text-lg bg-gray-300 mt-5 p-3 rounded-lg" key={idx}>
                <span className="font-bold text-[18px]">
                  {idx + 1}. {item?.tittle}:{" "}
                </span>{" "}
                {item?.details}
              </h1>
            );
          })}
        </div>
      </div>
    </CenterAlign>
  );
};

export default WhyMk;
