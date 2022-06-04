import axios from "axios"

export const SORT='SORT'
export const ADDCITY='ADDCITY'

export const sort = (val) => {
  return {
    type: SORT,
    payload: val,
  };
};

export const addCity=(val)=>{
    return {
        type:ADDCITY,
        payload:val
    }
}
export const deleteCity=(val)=>async(dispatch)=>{
  console.log(val,'val')
    axios
      .delete(`https://city-country-01.herokuapp.com/add-city/${val}`)
      .then(() => dispatch(getCity()));
}

export const postCity=(val)=>async(dispatch)=>{
  console.log(val,'valllllllll')
    axios
      .post("https://city-country-01.herokuapp.com/add-city/", { ...val })
      .then(() => dispatch(getCity()))
      .catch((error) => console.log(error));
}
export const getCity = () => async (dispatch) => {
  axios
    .get("https://city-country-01.herokuapp.com/add-city/")
    .then((res) => dispatch(addCity(res.data)));
};