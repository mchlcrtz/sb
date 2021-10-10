import React, { useState } from "react";

const CreativeForm = (props) => {
  const { vehicle } = props;

  const [state, setState] = useState({
    vehicleType: vehicle.vehicle_type || "sedan",
    nickname: vehicle.nickname || "",
    mileage: vehicle.mileage || 0,
    wheels: vehicle.wheels || 0,
    engineStatus: vehicle.engine_status || "works",
    seatStatus: vehicle.seat_status || "works",
  });

  const carTypeOptions = ["sedan", "coupe", "mini-van", "motorcycle"];
  const engineSeatOptions = ["works", "fixable", "junk"];

  const handleVehicleChange = (e) => {
    const { id, value } = e.target;

    setState({
      [id]: value,
      nickname: vehicle.nickname || "",
      mileage: vehicle.mileage || 0,
      wheels: vehicle.wheels || 0,
      engineStatus: vehicle.engine_status || "works",
      seatStatus: vehicle.seat_status || "works",
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setState({
      ...state,
      [id]: value,
    });
  };

  return (
    <div>
      <label>Car Type</label>
      <select id="vehicleType" value={state['vehicleType']} onChange={(e) => handleVehicleChange(e)}>
        {carTypeOptions.map((type) => (
          <option value={type}>{type}</option>
        ))}
      </select>
      <input
        name="vehicle[vehicle_type]"
        value={state["vehicleType"]}
        type="hidden"
      />
      <div>
        <div className="field">
          <label>Nickname</label>
          <input
            id="nickname"
            type="text"
            value={state["nickname"]}
            name="vehicle[nickname]"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="field">
          <label>Mileage</label>
          <input
            id="mileage"
            name="vehicle[mileage]"
            type="number"
            min="0"
            step="1000"
            max="1000000"
            value={state["mileage"]}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="field">
          <label>Wheels</label>
          <input
            type="number"
            min="0"
            max={state['vehicleType'] == carTypeOptions[3] ? 2 : 4}
            id="wheels"
            value={state["wheels"]}
            name="vehicle[wheels]"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="field">
          <label>Engine Status</label>
          <select id="engineStatus" value={state['engineStatus']} onChange={(e) => handleInputChange(e)}>
            {engineSeatOptions.map((type) => (
              <option value={type}>{type}</option>
            ))}
          </select>
          <input
            name="vehicle[engine_status]"
            value={state["engineStatus"]}
            type="hidden"
          />
        </div>
        {state["vehicleType"] === carTypeOptions[3] ? (
          <div className="field">
            <label>Seat Status</label>
            <select id="seatStatus" value={state['seatStatus']} onChange={(e) => handleInputChange(e)}>
              {engineSeatOptions.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
            <input
              name="vehicle[seat_status]"
              value={state["seatStatus"]}
              type="hidden"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CreativeForm