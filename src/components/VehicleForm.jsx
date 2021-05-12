import React, { useState } from "react";
import "./VehicleForm.css";


const VehicleForm = (props) => {

    const [enteredName, setEnteredName] = useState("")
    const [enteredModel, setEnteredModel] = useState("")

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    }
    const modelChangeHandler = (e) => {
        setEnteredModel(e.target.value)
    }


    const submitHandler = (e) => {
        e.preventDefault();

        const vehicleData = {
            name: enteredName,
            model: enteredModel
        };

        props.onSaveVehicleData(vehicleData)

        setEnteredName("")
        setEnteredModel("")



    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-vehicle__controls">
                <div className="new-vehicle__control">
                    <label>Name </label>
                    <input type="text" value={enteredName} onChange={nameChangeHandler} />
                </div>
                <div className="new-vehicle__control">
                    <label>Model </label>
                    <input type="text" value={enteredModel} onChange={modelChangeHandler} />
                </div>
                <div className="new-vehicle__actions">
                    <button type="submit">Add Vehicle</button>
                </div>
            </div>
        </form>
    )
}

export default VehicleForm;