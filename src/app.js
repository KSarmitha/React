import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ContentComponent from "./components/Content";
import CountryDetails from "./components/CountryDetails";
import FooterComponent from "./components/Footer";
import NotFound from "./components/NotFound";
import TopbarComponent from "./components/Topbar";

const AppLayoutComponent = () => (
  <div className="text-white" style={{ backgroundColor: "#212121"}}>
    <TopbarComponent />
    <Outlet />
    <FooterComponent />
  </div>
);

const Hotels = lazy(() => import("./components/HotelReservation"));

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayoutComponent />,
      children: [
        {
          path: "/",
          element: <ContentComponent/>
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/hotels",
          element: <Suspense fallback = {<>Loading...</>}> <Hotels /> </Suspense>
        },
        {
          path: "/country/:countryName",
          element: <CountryDetails/>
        }
      ],
      errorElement: <NotFound />
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
