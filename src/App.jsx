import React from "react";
// Import Swiper styles
import "swiper/css";
import Home from "./features/HomePage/containers/Home";
import { RouterProvider } from "react-router-dom";
import router from "./shared/route/AppRouter";
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
