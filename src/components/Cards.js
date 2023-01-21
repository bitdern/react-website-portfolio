import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Blog Articles and stuff I built</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src="images/img-9.jpg"
              text="Text highlighting the blog or project"
              label="Bitcoin"
              path="/Blog"
            />
            <Carditem
              src="images/img-2.jpg"
              text="Text highlighting the blog or project"
              label="Website"
              path="/Projects"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="images/img-3.jpg"
              text="Text highlighting the blog or project"
              label="Regenerative Agriculture"
              path="/Blog"
            />
            <Carditem
              src="images/img-4.jpg"
              text="Text highlighting the blog or project"
              label="Wallet Front End"
              path="/Projects"
            />
            <Carditem
              src="images/img-8.jpg"
              text="Text highlighting the blog or project"
              label="Resume"
              path="/React-Out"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
