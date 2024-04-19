import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ContentComponent from "./components/Content";
import CountryDetails from "./components/CountryDetails";
import FooterComponent from "./components/Footer";
import NotFound from "./components/NotFound";
import TopbarComponent from "./components/Topbar";

const AppLayoutComponent = () => (
  <div style={{ backgroundColor: "#212121", color: "#fff" }}>
    <TopbarComponent />
    <Outlet />
    <FooterComponent />
  </div>
);

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
