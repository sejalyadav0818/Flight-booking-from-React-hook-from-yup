import React from "react";
import InputField from "../Controls/InputField";
import Dropdown from "../Controls/Dropdown";
import CheckboxGroup from "../Controls/CheckboxGroup";
import {
  seatClassOptions,
  airlineOptions,
  tripOptions,
} from "../Options/options";
import "../../assets/style.css";
const FlightSchedule = (props) => {
  return (
    <div>
      <InputField
        label="Flight Number"
        name="flightNo"
        value={props.flightSchedule["flightNo"]}
        error={props.errors.flightNo}
        onChange={(e) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,

            flightNo: e.target.value,
          }));
          props.setErrors((prevState) => ({
            ...prevState,

            flightNo: "",
          }));
        }}
      />

      <Dropdown
        name="airlineName"
        label="Airline Name:"
        options={airlineOptions}
        value={props.flightSchedule.airlineName}
        error={props.errors.airlineName}
        onChange={(selectedOptionone) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,
            airlineName: selectedOptionone,
          }));
          props.setErrors((prevState) => ({
            ...prevState,
            airlineName: "",
          }));
        }}
      />
      <br></br>
      <br></br>
      <Dropdown
        name="tripType"
        label="Trip Type:"
        options={tripOptions}
        error={props.errors.tripType}
        selectedOption={props.flightSchedule.tripType}
        onChange={(selectedOptiontwo) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,
            tripType: selectedOptiontwo,
          }));
          props.setErrors((prevState) => ({
            ...prevState,
            tripType: "",
          }));
        }}
      />
      <br></br>
      <br></br>
      <label>Seat Class</label>
      <CheckboxGroup
        label="Seat Class"
        options={seatClassOptions}
        error={props.errors.seatClass}
        selectedValues={props.flightSchedule.seatClass}
        onChange={(selectedValues) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,
            seatClass: selectedValues,
          }));
          props.setErrors((prevState) => ({
            ...prevState,
            seatClass: "",
          }));
        }}
      />
      <br></br>
      <br></br>
      <InputField
        name="departureAirport"
        label="Departure Airport"
        value={props.flightSchedule.departureAirport}
        error={props.errors.departureAirport}
        onChange={(e) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,

            departureAirport: e.target.value,
          }));
          props.setErrors((prevState) => ({
            ...prevState,

            departureAirport: "",
          }));
        }}
      />
      <br></br>
      <br></br>
      <InputField
        label="Arrived Airport"
        name="arrivedAirport"
        value={props.flightSchedule.arrivedAirport}
        error={props.errors.arrivedAirport}
        onChange={(e) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,

            arrivedAirport: e.target.value,
          }));
          props.setErrors((prevState) => ({
            ...prevState,

            arrivedAirport: "",
          }));
        }}
      />
      <InputField
        label="Return Date:"
        type="date"
        name="returnDate"
        value={props.flightSchedule.returnDate}
        error={props.errors.returnDate}
        onChange={(e) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,

            returnDate: e.target.value,
          }));
          props.setErrors((prevState) => ({
            ...prevState,

            returnDate: "",
          }));
        }}
      />
      <InputField
        label="Departure Date"
        type="date"
        name="departureDate"
        value={props.flightSchedule.departureDate}
        error={props.errors.departureDate}
        onChange={(e) => {
          props.setFlightSchedule((prevState) => ({
            ...prevState,

            departureDate: e.target.value,
          }));
          props.setErrors((prevState) => ({
            ...prevState,

            departureDate: "",
          }));
        }}
      />
    </div>
  );
};

export default FlightSchedule;
