import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetABookingQuery } from "../../../Redux/api/api";
import CenterAlign from "../../Helper/CenterAlign";
import Loading from "../../SharedComponent/Loading";
import InputField from "../../Ui/Input";
import amarPay from "../../../assets/Payment/amarPay.png"
import Button from "../../Ui/Button";

const Payment = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetABookingQuery({ id });
  console.log(data);
  // user data handle.
  const initialState = {
    email: "",
    phone: "",
    address: "",
    name: "",
  };
  const [formData, setFormData] = useState(initialState);
  const update = (data) => {
    setFormData({ ...formData, ...data });
  };

  useEffect(() => {
    if (data?.data?.user) {
      setFormData({
        name: data?.data?.user.name,
        email: data?.data?.user.email,
        phone: data?.data?.user.phone,
        address: data?.data?.user.address,
      });
    }
  }, [data]);







  return (
    <CenterAlign>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="min-h-[60vh] mt-5 flex items-start gap-10">
          <div className="w-[70%]">
            <h1 className="text-3xl font-semibold">Billing Details</h1>
            <form>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <InputField
                  disabled={true}
                  type={"text"}
                  altimeValue={formData?.name}
                  valueUpdate={(e) => update({ name: e.target.value })}
                  placeholder="Name"
                />
                <InputField
                  disabled={true}
                  type={"email"}
                  altimeValue={formData?.email}
                  valueUpdate={(e) => update({ email: e.target.value })}
                  placeholder="E-mail"
                />
                <InputField
                  disabled={true}
                  type={"number"}
                  altimeValue={formData?.phone}
                  valueUpdate={(e) => update({ phone: e.target.value })}
                  placeholder="Phone"
                />
                <InputField
                  disabled={true}
                  type={"text"}
                  altimeValue={formData?.address}
                  valueUpdate={(e) => update({ address: e.target.value })}
                  placeholder="Address"
                />
                <div></div>
              </div>
            </form>
          </div>


          <div className="w-[30%] rounded-xl bg-[#f9f9f9] p-6">
            <h1 className="text-xl font-semibold">Booking Summery</h1>
            <div className=" mt-5 border-b pb-3 border-black">
              <h1 className="text-lg font-normal flex justify-between">
                Room Name:{" "}
                <span className="font-bold">
                  {data?.data?.slot?.room?.name}
                </span>
              </h1>
              <h1 className="text-lg font-normal flex justify-between">
                Booking Date:{" "}
                <span className="font-bold">{data?.data?.slot?.date}</span>
              </h1>
              <h1 className="text-lg font-normal flex justify-between">
                Booking Time:{" "}
                <span><span className="font-bold">{data?.data?.slot?.startTime}</span>{" "}
                To{" "}
                <span className="font-bold">{data?.data?.slot?.endTime}</span></span>
              </h1>
            </div>
            <h1 className="flex justify-between text-xl"><span>Total Cost:</span> <span className="font-bold">$ {data?.data?.slot?.room?.pricePerSlot}</span></h1>

            <div>
            <h1 className="text-xl font-semibold mt-5">Select Payment Method</h1>
            <label className="flex items-center mt-3 gap-4" htmlFor="amarPay">
                <input className="scale-125" id="amarPay" defaultChecked type="radio" />
                <img className="w-[60px] h-[60px]" src={amarPay} alt="" />
            </label>

            <Button className="block w-full text-lg font-normal mt-3" text="Confirm Booking"/>
          </div>

          </div>
          
        </div>
      )}
    </CenterAlign>
  );
};

export default Payment;
