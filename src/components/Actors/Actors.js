import React from "react";
import { useEffect, useState } from "react";
import Actor from "../Actor/Actor";
import SelectedActors from "../SelectedActors/SelectedActors";
import "./Actors.css";

const Actors = () => {
  const [selectedActors, setSelectedActors] = useState([]);
  const [actors, setActors] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  console.log(totalCost);
  useEffect(() => {
    fetch("./casts.JSON")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, [selectedActors]);

  useEffect(() => {
    let cost = 0;
    selectedActors.forEach((actor) => {
      cost = parseInt(actor.Price) + cost;
    });
    setTotalCost(cost);
  }, [selectedActors]);
  const handleBtnClick = (props) => {
    let exist = selectedActors.find((actor) => actor.id === props.id);

    if (exist === undefined) {
      const selected = [...selectedActors];

      selected.push(props);
      setSelectedActors(selected);
    } else {
      alert("Already Selected");
    }
  };

  return (
    <div className="  actor-container">
      <div className=" row all-actors gy-2">
        {actors.map((actor) => (
          <Actor
            key={actor.id}
            actor={actor}
            handleClick={() => handleBtnClick(actor)}
          ></Actor>
        ))}
      </div>

      <div className="selected-actors">
        <h5 className="bg-info py-2">Selected Actors</h5>
        {selectedActors.map((actor) => (
          <SelectedActors key={actor.id} actor={actor}></SelectedActors>
        ))}
        <h6 className="text-end">Total Cost = {totalCost}</h6>
      </div>
    </div>
  );
};

export default Actors;
