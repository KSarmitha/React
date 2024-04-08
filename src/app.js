import React from "react";
import ReactDOM from "react-dom/client";
import ContentComponent from "./components/Content";
import FooterComponent from "./components/Footer";
import TopbarComponent from "./components/Topbar";

const AppLayoutComponent = () => (
  <div style={{ backgroundColor: "#212121", color: "#fff" }}>
    <TopbarComponent />
    <ContentComponent/>
    <FooterComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent />);
