import React from "react";
import InputField from "../Controls/InputField";
import "../../assets/style.css";
const TIcketPurchase = (props) => {
  return (
    <div>
      <InputField
        label="Full Name"
        name="fullName"
        value={props.ticketPurchase.fullName}
        error={props.errors.fullName}
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            fullName: e.target.value,
          }));
          props.setErrors((prevState) => ({
            ...prevState,

            fullName: "",
          }));
        }}
      />
      <InputField
        label="Credit Card Number"
        name="cardnumber"
        value={props.ticketPurchase.cardnumber}
        error={props.errors.cardnumber}
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            cardnumber: e.target.value,
          }));
          props.setErrors((prevState) => ({
            ...prevState,

            cardnumber: "",
          }));
        }}
      />
      <InputField
        label="Date and time of Payment"
        type="datetime-local"
        name="paymentDateTime"
        value={props.ticketPurchase.paymentDateTime}
        error={props.errors.paymentDateTime}
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            paymentDateTime: e.target.value,
          }));
          props.setErrors((prevState) => ({
            ...prevState,

            paymentDateTime: "",
          }));
        }}
      />
      <InputField
        label="Phone"
        name="Phone"
        value={props.ticketPurchase.Phone}
        error={props.errors.Phone}
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            Phone: e.target.value,
          }));
          props.setErrors((prevState) => ({
            ...prevState,

            Phone: "",
          }));
        }}
      />
      <InputField
        label="Expiration (MM/YYYY)"
        type="month"
        name="month"
        value={props.ticketPurchase.month}
        error={props.errors.month}
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            month: e.target.value,
          }));
          props.setErrors((prevState) => ({
            ...prevState,

            month: "",
          }));
        }}
      />
      <InputField
        label="CVV"
        type="number"
        name="cvv"
        value={props.ticketPurchase.cvv}
        error={props.errors.cvv}
        onChange={(e) => {
          props.setTicketPurchase((prevState) => ({
            ...prevState,

            cvv: e.target.value,
          }));
          props.setErrors((prevState) => ({
            ...prevState,

            cvv: "",
          }));
        }}
      />
    </div>
  );
};

export default TIcketPurchase;
