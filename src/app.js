import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ContentComponent from "./components/Content";
import FooterComponent from "./components/Footer";
import NotFound from "./components/NotFound";
import TopbarComponent from "./components/Topbar";

const AppLayoutComponent = () => (
  <div style={{ backgroundColor: "#212121", color: "#fff" }}>
    <TopbarComponent />
    <ContentComponent/>
    <FooterComponent />
  </div>
);

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayoutComponent />,
      errorElement: <NotFound />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    }

  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
