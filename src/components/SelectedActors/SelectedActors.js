import React from "react";
import "./SelectedActors.css";

const SelectedActors = (props) => {
  const { name, Price, img } = props.actor;
  return (
    <div className="d-flex selected-actor-card">
      <img className="selected-actor-img" src={img} alt="" />
      <p className="w-75 actor-name">{name}</p>
      <p className="w-25 text-right price-text">{Price}</p>
    </div>
  );
};

export default SelectedActors;
