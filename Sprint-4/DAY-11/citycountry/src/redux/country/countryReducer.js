import { ADDCOUNTRY } from "./countryAction";

var init = {
  country: [],
};

export const countryReducer = (store = init, { type, payload }) => {
    //console.log(type,":",payload)
  switch (type) {
    case ADDCOUNTRY:
      return { ...store, country: payload };
    default:
      return { ...store };
  }
};
