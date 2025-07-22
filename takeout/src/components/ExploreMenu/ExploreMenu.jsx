import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div>
      <div className="explore_menu" id="explore_menu">
        <h1>Explore our Menu</h1>
        <p className="explore-menu-text">
          Choose from a diverse array of items of different cuisines
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => (
            <div key={index} className="explore-menu-list-item">
              <img
                src={item.image}
                alt={item.menu_name}
                className="explore-menu-image"
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
