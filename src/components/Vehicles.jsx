import React, { useState } from "react";
import "./Vehicles.css";
import VehiclesList from "./VehiclesList";
import VehicleFilter from "./VehicleFilter";
import VehicleSort from "./VehicleSort";

const Vehicles = (props) => {
  const [filteredName, setFilteredName] = useState("");
  const filterChangeHandler = (selectedVehicle) => {
    setFilteredName(selectedVehicle);
  };

  const [sortVehicle, setSortVehicle] = useState("a-z");
  const sortHandler = (selectedSort) => {
    setSortVehicle(selectedSort);
  };

  function byNameDESC(a, b) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  function byNameASC(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  if (sortVehicle === "a-z") {
    props.items.sort(byNameDESC);
  }
  if (sortVehicle === "z-a") {
    props.items.sort(byNameASC);
  }

  const filteredVehicles = props.items.filter((vehicle) => {
    if (filteredName !== "") {
      if (vehicle.name.toLowerCase().indexOf(filteredName.toLowerCase()) > -1) {
        return vehicle.name;
      }
    } else {
      return vehicle.name;
    }

    return false;
  });

  return (
    <div>
      <VehicleFilter onSaveName={filterChangeHandler} />
      <VehicleSort onSaveSelect={sortHandler} selected={sortVehicle} />
      <div className="vehicles">
        <div className="titles">
          <div className="title-brand">NAME</div>
          <div className="title-model">MODEL</div>
        </div>
        <VehiclesList items={filteredVehicles} />
      </div>
    </div>
  );
};

export default Vehicles;
