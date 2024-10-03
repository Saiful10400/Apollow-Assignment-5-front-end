
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useGetLoggedInUserQuery } from "../../../Redux/api/api";
import { useAppDispatch } from "../../../Redux/feathcer/hoocks";
import { setLoading, setUser } from "../../../Redux/feathcer/AuthSlice";
import { getToken } from "../../../Utils/getToken";
import MyBookingAsideNav from "./SubBranch/Asidenav/MyBookingAsideNav";


const MybookingRoot = () => {

    const [shouldCall, setShouldCall] = useState(false);
    // getting login user details, if the user is logged in.
    const { data } = useGetLoggedInUserQuery(undefined, { skip: !shouldCall });
  
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      if (getToken()) {
        setShouldCall(true);
      } else {
        dispatch(setLoading(false));
      }
    }, [dispatch]);
  
    useEffect(() => {
      if (data) {
        dispatch(setUser(data.data));
      }
    }, [data, dispatch]);




  return (
    <div className="flex gap-x-9 items-start w-full box-border pl-14 pt-16 justify-start">
      <MyBookingAsideNav />
      <div className=" lg:w-[1300px]">
      <Outlet />
      </div>
    </div>
  );
};

export default MybookingRoot;
