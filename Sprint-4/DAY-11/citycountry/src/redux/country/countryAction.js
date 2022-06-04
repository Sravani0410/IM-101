

import axios from "axios";

export const ADDCOUNTRY = "ADDCOUNTRY";

export const addCountry = (val) => {
  return {
    type: ADDCOUNTRY,
    payload: val,
  };
};

export const postCountry = (val) => async (dispatch) => {
    console.log(val,"helloooo")
  axios
    .post("https://city-country-01.herokuapp.com/add-country/", val)
    .then(() => dispatch(getCountry()));
};
export const getCountry = () => async (dispatch) => {
  axios
    .get("https://city-country-01.herokuapp.com/add-country/")
    .then((res) => dispatch(addCountry(res.data)));
};