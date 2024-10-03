import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { useAppSelector } from "../../../../../Redux/feathcer/hoocks";
import { ImHome } from "react-icons/im";
const MyBookingAsideNav = () => {
  const routes = (
    <>
      <NavLink className="text-lg pl-2 font-semibold" to={""} end>
      My Bookings
      </NavLink>
    </>
  );

  const { loggedInUser } = useAppSelector((state) => state.authStore);

  return (
    <div className="bg-gray-700  lg:w-[300px] justify-between lg:h-[80vh]  text-white py-6 px-4 rounded-xl lg:pt-16 sticky top-[65px]">
      <div className="flex justify-center items-center flex-col gap-4">
        <img
          className="lg:w-[100px] lg:h-[100px] rounded-full object-cover"
          src={loggedInUser?.img}
          alt=""
        />
        <h1 className="text-xl">{loggedInUser?.name}</h1>
      </div>

      <ul className="flex flex-col gap-3 mt-10">{routes}</ul>

      <Link
        className="text-lg absolute left-3 bottom-5 flex items-center gap-2 pl-2 font-semibold"
        to={"/"}
      >
        <ImHome /> Home
      </Link>
    </div>
  );
};

export default MyBookingAsideNav;
