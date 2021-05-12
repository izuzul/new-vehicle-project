import "./App.css";
import NewVehicle from "./components/NewVehicle";
import Vehicles from "./components/Vehicles";
import React, { useState } from "react";
import { nanoid } from "nanoid";

const dummy_vehicles = [
  {
    id: nanoid(),
    name: "Bmw",
    model: "5",
  },
  {
    id: nanoid(),
    name: "Mercedes",
    model: "Cl500",
  },
  {
    id: nanoid(),
    name: "Renault",
    model: "Twingo",
  },
  {
    id: nanoid(),
    name: "Toyota",
    model: "Yaris",
  },
];

const App = () => {
  const [vehicles, setVehicles] = useState(dummy_vehicles);

  const addVehicleHandler = (vehicle) => {
    setVehicles((prevVehicles) => {
      return [vehicle, ...prevVehicles];
    });
  };

  return (
    <div className="App">
      <h1>New vehicle app</h1>
      <NewVehicle onAddVehicle={addVehicleHandler} />
      <Vehicles items={vehicles} />
    </div>
  );
};

export default App;
