import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/Store.ts";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.tsx";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ChakraProvider>
      <RouterProvider router={routes} />
    </ChakraProvider>
  </Provider>
);
