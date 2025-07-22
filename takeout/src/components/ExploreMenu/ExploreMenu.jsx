import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div>
      <div className="explore_menu" id="explore_menu">
        <h1>Explore our Menu</h1>
        <p className="explore-menu-text">
          Choose from a diverse array of items of different cuisines
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All " : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={category === item.menu_name ? "active" : ""}
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExploreMenu;
