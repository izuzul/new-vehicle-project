import React from "react";
import "./VehicleFilter.css";

const VehicleFilter = (props) => {
  const filterChangeHandler = (e) => {
    props.onSaveName(e.target.value);
  };

  return (
    <div className="filter_input">
      <label>Filter</label>
      <input
        type="text"
        placeholder="Vehicle name"
        onChange={filterChangeHandler}
        value={props.value}
      />
    </div>
  );
};

export default VehicleFilter;
