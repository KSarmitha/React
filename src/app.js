import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ContentComponent from "./components/Content";
import CountryDetails from "./components/CountryDetails";
import FooterComponent from "./components/Footer";
import NotFound from "./components/NotFound";
import TopbarComponent from "./components/Topbar";
import UserContext from "./components/UserContext";



const AppLayoutComponent = () => {
  const { name } = useContext(UserContext);
  const [ userName, setUsername ] = useState(name);

  return (
  <UserContext.Provider value={{name: userName, avatar: 'https://avatars.githubusercontent.com/u/39646697?v=4', setUsername}}>
  <div className="text-white" style={{ backgroundColor: "#212121"}}>
    {/* // avatar is not passed here, it will set it as empty string */}
    {/* <UserContext.Provider value={{name: 'wewew'}}> */}
    <TopbarComponent />
    {/* </UserContext.Provider> */}
    <Outlet />
    <FooterComponent />
  </div>
  </UserContext.Provider>
  );
};

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
