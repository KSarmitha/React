import React from "react";
import ReactDOM from "react-dom/client";

// React element
const logo = (
  <img
    className="logo"
    src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-holiday-summer-logo-png-image_4012842.jpg"
    alt="Google Logo"
  />
);

const data = [
  {
    id: 1,
    name: "Sri Lanka",
    desc: "Country in Asia",
    avatar:
      "https://media.istockphoto.com/id/1406974336/photo/train-passing-over-nine-arch-bridge.jpg?s=612x612&w=0&k=20&c=vcgZUUaLWpzdFg9Rw4hUTx5g1evILmY-CYtCe1G7SPc=",
  },
  {
    id: 2,
    name: "USA",
    desc: "Country in North America",
    avatar:
      "https://static5.depositphotos.com/1030296/395/i/450/depositphotos_3958211-stock-photo-new-york-cityscape-tourism-concept.jpg",
  },
  {
    id: 3,
    name: "UK",
    desc: "Country in Europe",
    avatar:
      "https://w0.peakpx.com/wallpaper/575/532/HD-wallpaper-big-ben-evening-city-english-landmarks-england-uk-london-united-kingdom.jpg",
  },
  {
    id: 4,
    name: "Australia",
    desc: "Country in Australia",
    avatar:
      "https://www.shutterstock.com/image-photo/pinkish-colourful-sunrise-over-sydney-600nw-1094901527.jpg",
  },
  {
    id: 5,
    name: "Japan",
    desc: "Country in Asia",
    avatar:
      "https://www.nationsonline.org/gallery/Japan/Churei-to-pagoda-and-Mount-Fuji.jpg",
  },
  {
    id: 6,
    name: "India",
    desc: "Country in Asia",
    avatar:
      "https://www.shutterstock.com/image-photo/gateway-india-mumbai-beautiful-landscape-600nw-749994316.jpg",
  },
  {
    id: 7,
    name: "China",
    desc: "Country in Asia",
    avatar:
      "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/08/china_shanghai_yuyuan-garden-city.jpg",
  },
  {
    id: 8,
    name: "Russia",
    desc: "Country in Europe",
    avatar:
      "https://www.state.gov/wp-content/uploads/2018/11/Russia-2499x1406.jpg",
  },
  {
    id: 9,
    name: "Brazil",
    desc: "Country in South America",
    avatar:
      "https://a.cdn-hotels.com/gdcs/production14/d1837/8f5f8b30-fe12-11e8-b9f6-0242ac110006.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
  },
  {
    id: 10,
    name: "Canada",
    desc: "Country in North America",
    avatar:
      "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1171990615v2-768x511.jpg",
  },
];

// React component - functional component
const TopbarComponent = () => (
  <div className="header">
    <div>{logo}</div>
    <div>
      <input type="text" placeholder="Search" />
    </div>
    <div style={{ display: "flex" }}>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Contact</li>
      </ul>
      <img
        className="profile"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Profile"
      />
    </div>
  </div>
);

const ContentComponent = (props) => {
  const { name, desc, avatar } = props?.data;
  return (
    <div className="card-content">
      <div className="card">
        <img className="card-img" src={avatar} alt="Avatar" />
        <div className="name">{name}</div>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

const FooterComponent = () => (
  <div>
    <div className="footer">Copy Rights Reserved @ 2024</div>
  </div>
);

const AppLayoutComponent = () => (
  <div style={{ backgroundColor: "#212121", color: "#fff" }}>
    <TopbarComponent />
    <div className="container">
      {data.map((country) => (
        <ContentComponent key={country.id} data={country} />
      ))}
    </div>
    <FooterComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent />);
