import { useState } from "react";
import { LOGO_URL, PROFILE_URL } from "../utils/constants";

const logo = <img className="logo" src={LOGO_URL} alt="Google Logo" />;

const TopbarComponent = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");

  return (
    <div className="header">
      <div>{logo}</div>
      <div
        style={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      >
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact</li>
          <button
            onClick={() => {
              loginBtnName === "Login"
                ? setLoginBtnName("Logout")
                : setLoginBtnName("Login");
            }}
          >
            {loginBtnName}
          </button>
        </ul>
        <img className="profile" src={PROFILE_URL} alt="Profile" />
      </div>
    </div>
  );
};

export default TopbarComponent;
