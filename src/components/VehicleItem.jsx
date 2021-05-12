import React from "react";
import "./VehicleItem.css"


const VehicleItem = (props) => {
    return (
        <li className="card">
            <div className="vehicle-item">
                <div className="vehicle-item__brand">
                    <h1>{props.name}</h1>
                </div>
                <div className="vehicle-item__model"><h1>{props.model}</h1></div>
            </div>
        </li>
    )
}

export default VehicleItem;