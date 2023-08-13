import { createRoot } from "react-dom/client";
import logo from "./img/BiteHub-logos-black.png";
const Header = () => (
  <div className="header">
    <div className="logo">
      <img src={logo} alt="logo-image" />
    </div>
    <div className="navbar">
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = () => (
  <div className="res-card">
    <div className="res-img">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aqsnrylokzpn45qhg1pb"
        alt="placeholder"
      />
    </div>
    <div className="res-description">
      <h3>Meghna Foods</h3>
      <h4>Biriyani, North Indian, Asian</h4>
      <h4>4.4 Stars</h4>
      <h4>38 mins</h4>
    </div>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  </div>
);
const AppLayout = () => (
  <div className="app-layout">
    <Header />
    <Body />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
