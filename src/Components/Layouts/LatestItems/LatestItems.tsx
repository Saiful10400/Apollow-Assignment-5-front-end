import React from "react";
import "./style.css"
import CenterAlign from "../../Helper/CenterAlign";
import { useGetProductsQuery } from "../../../Redux/api/api";
import ProductCart from "../../Ui/ProductCart";
import { NavLink } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import Tittle from "../../Ui/Tittle";

const LatestItems = () => {
  const { isLoading, data } = useGetProductsQuery(null);

  const getLast6Products=(data)=>{
    if(!data) return []
    return data.slice(-6)
  }

  return (

      <CenterAlign>
        <Tittle text="Featured Products" />
        <div>
          {data?.datya?.length === 0 ? (
            <div className="to-center w-full h-[20vh] text-lg mt-4">
              No Product Available!
            </div>
          ) : (
            <>
            <div className="grid grid-cols-1 mt-12 px-2 lg:grid-cols-3 gap-10">
              {getLast6Products(data?.data)?.map((item) =><div className="cardItem" key={item._id}><ProductCart  data={item} /></div> )}
            </div>
            <div className="to-center mt-5 mb-8 "><NavLink to="/products" className="text-white bg-black p-2 lg:p-3 rounded-3xl flex items-center gap-3"><span className="text-xl font-semibold">See more</span> <HiArrowLongRight className="text-4xl" /></NavLink></div>
            </>
          )}
        </div>
      </CenterAlign>

  );
};

export default LatestItems;
