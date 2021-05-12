import React from "react";
import VehicleItem from "./VehicleItem";
import "./VehiclesList.css";

const VehiclesList = (props) => {
  return (
    <ul className="vehicles-list">
      {props.items.map((vehicle) => (
        <VehicleItem
          key={vehicle.id}
          name={vehicle.name}
          model={vehicle.model}
        />
      ))}
    </ul>
  );
};

export default VehiclesList;
