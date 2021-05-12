import { nanoid } from "nanoid";
import React from "react";
import "./NewVehicle.css";
import VehicleForm from "./VehicleForm";


const NewVehicle = (props) => {

    const saveVehicleDataHandler = (enteredVehicleData) => {
        const vehicleData = {
            id: nanoid(),
            ...enteredVehicleData,

        };
        props.onAddVehicle(vehicleData)
    }

    return (
        <div className="new-vehicle">
            <VehicleForm onSaveVehicleData={saveVehicleDataHandler} />
        </div>
    )
}

export default NewVehicle;