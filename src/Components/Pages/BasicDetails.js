import React, { useState} from "react";
import InputField from "../Controls/InputField";
import RadioButton from "../Controls/RadioButton";
import DropDownList from "../Controls/DropDownList";
import data from "../Options/data.json";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactInformation from "../Pages/ContactInformation";
import { useForm } from "react-hook-form";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Box,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import {
  genderOptions,
} from "../Options/options";
import "../../assets/style.css";
const BasicDetails = (props) => {
  const handleAddressChange = (name, value) => {
    props.setBasicDetails((prevDetails) => ({
      ...prevDetails,
      address: {
        ...prevDetails.address,
        [name]: value,
      },
    }));
     props.setErrors((prevState) => ({
       ...prevState,

       street: "",
     }));
  };
  const [state, setState] = useState({
    selectedCountry: "",
    isCountrySelected: false,
    selectedCity: "",
    isCitySelected: false,
  });
  const countryList = data.states;
  const states = countryList.map((c) => {
    return c.state;
  });
  const cities = state.isCountrySelected
    ? countryList
        .filter((d) => d.state === state.selectedCountry)
        .map((c) => {
          return c.cities;
        })[0]
    : [];
  const onCountryChange = (state) => {
    let setIsCountrySelected = state !== "" ? true : false;
    props.setBasicDetails((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        state: state,
      },

      
    }));
    props.setErrors((prevState) => ({
      ...prevState,
        state: "",
    }));

    setState({
      selectedCountry: state,
      isCountrySelected: setIsCountrySelected,
      selectedCity: "",
      isCitySelected: false,
    });
  }
  const onCityChange = (city) => {
    let setIsCitySelected = city !== "" ? true : false;

    props.setBasicDetails((prevState) => ({
      ...prevState,
        city: city,
    }));
     props.setErrors((prevState) => ({
       ...prevState,
       city: "",
     }));
    setState({
      ...state,
      selectedCity: city,
      isCitySelected: setIsCitySelected,
    });
  
       setState({
         ...state,
         selectedCity: "",
         isCitySelected: "",
       });
       
       
  };

  return (
    // <>
    //   <h2>Basic Details</h2>

    //   <InputField
    //     label="Firstname"
    //     name="firstname"
    //     value={props.basicDetails.firstname}
    //     error={props.errors.firstname}
    //     onChange={(e) => {
    //       props.setBasicDetails((prevState) => ({
    //         ...prevState,

    //         firstname: e.target.value,
    //       }));
    //       props.setErrors((prevState) => ({
    //         ...prevState,

    //         firstname: "",
    //       }));
    //     }}
    //   />
    //   <InputField
    //     label="Lastname"
    //     name="lastname"
    //     value={props.basicDetails.lastname}
    //     error={props.errors.lastname}
    //     onChange={(e) => {
    //       props.setBasicDetails((prevState) => ({
    //         ...prevState,

    //         lastname: e.target.value,
    //       }));
    //       props.setErrors((prevState) => ({
    //         ...prevState,

    //         lastname: "",
    //       }));
    //     }}
    //   />
    //   <InputField
    //     label="Phone"
    //     name="phone"
    //     value={props.basicDetails.phone}
    //     error={props.errors.phone}
    //     onChange={(e) => {
    //       props.setBasicDetails((prevState) => ({
    //         ...prevState,

    //         phone: e.target.value,
    //       }));
    //       props.setErrors((prevState) => ({
    //         ...prevState,

    //         phone: "",
    //       }));
    //     }}
    //   />
    //   <label>Street Address:</label>
    //   <InputField
    //     label="street"
    //     name="street"
    //     value={props.basicDetails.address.street}
    //     onChange={(e) => handleAddressChange("street", e.target.value)}
    //     error={props.errors.street}
    //   />
    //   <label>states</label>
    //   <DropDownList
    //     source={states}
    //     selectedValue={props.basicDetails.address.selectedCountry}
    //     onDataChange={onCountryChange}
    //     placeHolder="country"
    //     error={props.errors.state}
    //   />
    //   <label>Cities</label>
    //   <DropDownList
    //     source={cities}
    //     selectedValue={props.basicDetails.address.selectedCity}
    //     onDataChange={onCityChange}
    //     placeHolder="city"
    //     error={props.errors.city}
    //     isCountrySelected={state.isCountrySelected}
    //   />

    //   <InputField
    //     label="zipCode"
    //     name="zipCode"
    //     value={props.basicDetails.address.zipCode}
    //     onChange={(e) => {
    //       props.setBasicDetails((prevState) => ({
    //         ...prevState,
    //         address: {
    //           ...prevState.address,
    //           zipCode: e.target.value,
    //         },
    //       }));
    //       props.setErrors((prevState) => ({
    //         ...prevState,
    //           zipCode: "",
    //       }));
    //     }}
    //     error={props.errors.zipCode}
    //   />

    //   <label>Gender:</label>
    //   <RadioButton
    //     options={genderOptions}
    //     selectedOption={props.basicDetails.gender}
    //     error={props.errors.gender}
    //     onOptionChange={
    //       (selectedOption) =>
    //        { props.setBasicDetails((prevDetails) => ({
    //           ...prevDetails,
    //           gender: selectedOption,
    //         }))
    //          props.setErrors((prevDetails) => ({
    //           ...prevDetails,
    //           gender: "",
    //         }))
    //       }
    //     }
    //   />
    //   <InputField
    //     label="Email"
    //     name="email"
    //     value={props.basicDetails.email}
    //     type="email"
    //     error={props.errors.email}
    //     onChange={(e) => {
    //       props.setBasicDetails((prevState) => ({
    //         ...prevState,
    //         email: e.target.value,
    //       }));
    //        props.setErrors((prevState) => ({
    //          ...prevState,
    //          email:"",
    //        }));
    //     }}
    //   />
    // </>
<>
      <h2>Basic Details</h2>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="firstname"
            name="firstname"
            label="First Name"
            fullWidth
            margin="dense"
            {...register("firstname")}
            error={errors.firstname ? true : false}
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.firstname?.message}
          </Typography>
          <TextField
            id="lastname"
            name="lastname"
            label="Lastname"
            fullWidth
            margin="dense"
            {...register("lastname")}
            error={errors.lastname ? true : false}
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.lastname?.message}
          </Typography>
          <TextField
            id="Phone"
            name="Phone"
            label="Phone"
            fullWidth
            margin="dense"
            {...register("Phone")}
            error={errors.Phone ? true : false}
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.Phone?.message}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default BasicDetails;
