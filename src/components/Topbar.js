import { LOGO_URL, PROFILE_URL } from '../utils/constants';

const logo = (
    <img
      className="logo"
      src={LOGO_URL}
      alt="Google Logo"
    />
  );

const TopbarComponent = () => (
    <div className="header">
      <div>{logo}</div>
      <div style={{ display: "flex" }}>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact</li>
        </ul>
        <img
          className="profile"
          src= { PROFILE_URL }
          alt="Profile"
        />
      </div>
    </div>
  );

  export default TopbarComponent;