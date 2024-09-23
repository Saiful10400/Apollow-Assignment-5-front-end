import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/whiteLogo.png";
import { IoMdCart } from "react-icons/io";
import CenterAlign from "../../Helper/CenterAlign";
import { useAppSelector } from "../../../Redux/feathcer/hoocks";
import { useEffect, useState } from "react";
import ToggleButton from "../../Ui/ToggleButton";
import "./style.css";
const NavBar = () => {
  const count = useAppSelector((state) => state.cartStore);

  useEffect(() => {
    const handleClose = (event) => {
      if (count.length !== 0) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleClose);
    return () => {
      window.removeEventListener("beforeunload", handleClose);
    };
  }, [count]);

  const routes = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/meeting-rooms"}>
          Meeting Rooms
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/authentication/login"}> Login/Register</NavLink>
      </li>
    </>
  );

  // mobile view.
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleHandler = () => {
    setShowDropDown((prev) => !prev);
  };

  return (
    <>
      {/* for desktop view */}
      <div className="bg-black lg:py-4 titillium-web-regular lg:block  hidden">
        <CenterAlign>
          <div className="flex items-center justify-between lg:pr-5 pt-3">
            <div className="flex items-center lg:gap-x-11">
              <Link to={"/"}>
                <img className="h-[50px]" src={logo} alt="logo" />
              </Link>

              <ul className="lg:flex hidden items-center lg:gap-10 text-white">
                {routes}
              </ul>
            </div>

            {/* <Link to={"/cart"} className="relative text-white">
            Login/Register
            </Link> */}
          </div>
        </CenterAlign>
      </div>
      {/*  mobile view. */}

      <div className="relative z-10 lg:hidden block">
        <div className="flex  items-center justify-between bg-black  px-3 py-2">
          <div className="flex  items-center">
            <ToggleButton onClick={toggleHandler} />
            <img
              className="w-[100px] h-[30px] object-contain"
              src={logo}
              alt=""
            />
          </div>
          <Link to={"/cart"} className="relative">
            Login/Register
          </Link>
        </div>

        {/* drop down. */}
        <ul
          className={`absolute text-white w-full mt-20  pt-4 pb-2 bg-black duration-300 pl-4 left-0 ${
            showDropDown ? "-bottom-[220%]" : "bottom-[185%]"
          } -z-10`}
        >
          {routes}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
