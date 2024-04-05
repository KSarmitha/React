import React from "react";
import ReactDOM from "react-dom/client";

// React element
const logo = (
  <img
    className="logo"
    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    alt="Google Logo"
  />
);

// React component - functional component
const HeadingComponent = () => (
  <div className="header">
    <div>{logo}</div>
    <div>
      <input type="text" placeholder="Search" />
    </div>
    <div>
      <img
        className="profile"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Profile"
      />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
