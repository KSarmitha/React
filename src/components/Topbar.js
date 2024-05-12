import { useState } from "react";
import { Link } from 'react-router-dom';
import { LOGO_URL, PROFILE_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const logo = <img className="h-12 w-12 rounded-full" src={LOGO_URL} alt="Google Logo" />;

const TopbarComponent = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  const  onlineStatus  = useOnlineStatus();

  return (
    <div className="flex justify-between bg-orange-400 p-2">
      <div>{logo}</div>
      <div className="flex justify-between flex-row items-center">
        <ul className="flex items-center gap-5 text-slate-800">
          <li className=" hover:underline hover:text-black"><Link to="/"> Home </Link></li>
          <li className=" hover:underline hover:text-black"><Link to="/about"> About Us </Link></li>
          <li className=" hover:underline hover:text-black"><Link to="/contact"> Contact </Link></li>
          <li className=" hover:underline hover:text-black"><Link to="/hotels"> Hotels Reservation </Link></li>
          <button className="rounded-md border border-orange-950 p-1 bg-orange-800 text-white w-24"
            onClick={() => {
              loginBtnName === "Login"
                ? setLoginBtnName("Logout")
                : setLoginBtnName("Login");
            }}
          >
            {loginBtnName}
          </button>
        </ul>
        <div className="pl-5 flex">
        <img className="h-10 w-10 rounded-full border-2 border-cyan-50" src={PROFILE_URL} alt="Profile" />
        <span className={`h-2 w-2 rounded-full absolute ${onlineStatus ? 'bg-green-600' : 'bg-red-600'}`}></span>
        </div>
      </div>
    </div>
  );
};

export default TopbarComponent;
