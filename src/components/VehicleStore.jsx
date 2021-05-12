import { nanoid } from "nanoid";

import { makeObservable, observable } from "mobx";

class Vehicle {

    vehicles = [];
    constructor() {
        makeObservable(this)
    }

    VehicleMake(name, model) {
        this.vehicles.push({
            name, model, id: nanoid()
        })
    }

    RemoveVehicle(id) {
        this.note = this.vehicles.filter(vehicle = vehicle.id !== id)
    }



}

const VehicleStore = new Vehicle();

export default VehicleStore