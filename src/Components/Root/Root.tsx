import { Outlet } from "react-router";
import NavBar from "../Layouts/NavBar/NavBar";
import Footer from "../Layouts/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos"
import 'aos/dist/aos.css';
const Root = () => {
  AOS.init();
  return(
    <div className="">
     <div className="sticky top-0 z-50">
     <NavBar/>
     <ToastContainer />
     </div>
      <div className="relative z-10">
      <Outlet/>
      <Footer/>
      
      </div>
    </div>
  )
};

export default Root;
