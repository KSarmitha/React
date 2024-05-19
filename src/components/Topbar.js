import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";

const logo = <img className="h-12 w-12 rounded-full" src={LOGO_URL} alt="Google Logo" />;

const TopbarComponent = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  const  onlineStatus  = useOnlineStatus();
  const { name, avatar } = useContext(UserContext);
  const selector = useSelector((state) => state.cartState.cardItems);

  return (
    <div className="flex justify-between bg-orange-400 p-2">
      <div>{logo}</div>
      <div className="flex justify-between flex-row items-center">
        <ul className="flex items-center gap-5 text-slate-800">
          <li className=" hover:underline hover:text-black"><Link to="/"> Home </Link></li>
          <li className=" hover:underline hover:text-black"><Link to="/about"> About Us </Link></li>
          <li className=" hover:underline hover:text-black"><Link to="/contact"> Contact </Link></li>
          <li className=" hover:underline hover:text-black"><Link to="/hotels"> Hotels Reservation </Link></li>
          <li className=" hover:underline hover:text-black bg-orange-900 rounded-full p-2"><Link to="/cart"> 🛒 
          <span className="text-white">{selector?.length}</span>
          </Link></li>
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

        <span className="text-black flex pl-5">{name}</span>
        <div className="pl-1 flex">
        <img className="h-10 w-10 rounded-full border-2 border-cyan-50" src={avatar} alt="Profile" />
        <span className={`h-2 w-2 rounded-full absolute ${onlineStatus ? 'bg-green-600' : 'bg-red-600'}`}></span>
        </div>
      </div>
    </div>
  );
};

export default TopbarComponent;
