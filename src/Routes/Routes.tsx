import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root"
import Home from "../Components/Pages/Home/Home";
import Dashboard from "../Components/Pages/Dashbaord/Dashboard";
import Product from "../Components/Pages/Product/Product";
import SingleProduct from "../Components/Pages/SingleProduct/SingleProduct";
import Cart from "../Components/Pages/Cart/Cart";
import Checkout from "../Components/Pages/Checkout/Checkout";
import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import SuccessPayment from "../Components/Layouts/SuccessPayment/SuccessPayment";
const routes=createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        // errorElement:<h1>Murubbi murubbi. uhhhhhh.</h1>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/dashboard",
                element:<Dashboard/>
            },
            {
                path:"/products",
                element:<Product/>
            },
            {
                path:"/products/:id",
                element:<SingleProduct/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/about-us",
                element:<AboutUs/>
            },
            {
                path:"/contact-us",
                element:<ContactUs/>
            },
            {
                path:"/checkout",
                element:<Checkout/>
            },
            {
                path:"/Success-order",
                element:<SuccessPayment/>
            },
        ]
    }
])


export default routes