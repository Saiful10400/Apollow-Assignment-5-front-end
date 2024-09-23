import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home";

import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import SuccessPayment from "../Components/Layouts/SuccessPayment/SuccessPayment";
import Rooms from "../Components/Pages/Rooms/Rooms";
import Authentication from "../Components/Pages/Authentication/Authentication";
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

      {
        path: "/Success-order",
        element: <SuccessPayment />,
      },
    ],
  },
]);

export default routes;
