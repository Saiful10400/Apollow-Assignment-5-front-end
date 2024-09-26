import { Outlet } from "react-router";
import NavBar from "../Layouts/NavBar/NavBar";
import Footer from "../Layouts/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useGetLoggedInUserQuery } from "../../Redux/api/api";
import { getToken } from "../../Utils/getToken";
import { useAppDispatch } from "../../Redux/feathcer/hoocks";
import { setLoading, setUser } from "../../Redux/feathcer/AuthSlice";
const Root = () => {
  AOS.init();

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
    <div className="">
      <div className="sticky top-0 z-50">
        <NavBar />
        <ToastContainer />
      </div>
      <div className="relative z-10">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
