import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/*
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./Components/About.jsx";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import Body from "./Components/Body.jsx";
import Cart from "./Components/Cart.jsx";
import RestaurantMenu from "./Components/bodyComponents/RestaurantMenu.jsx";
import Page404 from "./Components/lottiefiles/Page404.jsx";
import Loading from "./Components/lottiefiles/Loading.jsx";

// grocery component
const Grocery = lazy(() => import("./Components/Grocery"))

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Body />}> </Route>
        <Route path="about" element={<About />}> </Route>
        <Route path="contactus" element={<ContactUs />}> </Route>
        <Route path="grocery" element={
          <Suspense fallback={<Loading/>}>
            <Grocery />  {/* if grocery component takes more time to load then suspense will load into dom , here we can also render shimmer component*/}
          </Suspense>}>  
        </Route>
        <Route path="cart" element={<Cart />}> </Route>
        <Route path="*" element={<Page404 />}> </Route>   {/* when invalid url encounter this component will render */}
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
