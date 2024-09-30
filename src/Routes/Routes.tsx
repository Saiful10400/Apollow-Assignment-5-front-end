import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home";

import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import Rooms from "../Components/Pages/Rooms/Rooms";
import Authentication from "../Components/Pages/Authentication/Authentication";
import AdminDashboard from "../Components/Pages/AdminDashboard/AdminDashboard";
import RoomManage from "../Components/Pages/AdminDashboard/SubPages/Rooms/RoomManage";
import BookingManage from "../Components/Pages/AdminDashboard/SubPages/Bookings/BookingManage";
import SlotManage from "../Components/Pages/AdminDashboard/SubPages/Slots/SlotManage";
import SingleRoom from "../Components/Pages/SingleRoom/SingleRoom";
import BookingProcess from "../Components/Pages/BookingProcess/BookingProcess";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement:<h1>Murubbi murubbi. uhhhhhh.</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meeting-rooms",
        element: <Rooms />,
      },
      {
        path: "/meeting-rooms/:id",
        element: <SingleRoom />,
      },
      {
        path: "/meeting-rooms/booking/:id",
        element: <BookingProcess />,
      },
      {
        path: "/authentication/:id",
        element: <Authentication />,
      },

      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    children:[
      {
        path:"room",
        element:<RoomManage/>
      },
      {
        path:"booking",
        element:<BookingManage/>
      },
      {
        path:"slot",
        element:<SlotManage/>
      }
    ]
  }
]);

export default routes;
