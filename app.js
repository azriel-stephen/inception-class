import { createRoot } from "react-dom/client";
import logo from "./img/BiteHub-logos-black.png";
import data from "./data";
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

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  const { deliveryTime } = resData.info.sla;

  const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;
  return (
    <div className="res-card">
      <img className="res-img" src={imgUrl} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {data.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  </div>
);
const AppLayout = () => (
  <div className="app-layout">
    <Header />
    <Body />
  </div>
);
console.log(data[1].info);
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
