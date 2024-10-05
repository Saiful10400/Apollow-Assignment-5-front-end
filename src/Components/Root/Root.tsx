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
import axios from "axios";
const Root = () => {
  AOS.init();


  // getting login user details, if the user is logged in.
 

  const dispatch = useAppDispatch();



  useEffect(() => {
    axios.get("http://localhost:8000/api/auth/getCurrentUser", {
      headers: {
        authorization: getToken() ,
      }
    }).then(res=>{
      console.log("from root.")
      dispatch(setUser(res.data.data))
 
    })
  }, []);


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
