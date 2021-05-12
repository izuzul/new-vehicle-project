import React from "react";
import "./VehicleSort.css";

const VehicleSort = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onSaveSelect(e.target.value);
  };
  return (
    <div className="sort-container">
      <label>Sort: </label>
      <select onChange={dropdownChangeHandler} value={props.selected}>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
    </div>
  );
};

export default VehicleSort;
