import { ADDCITY } from "./cityAction";
import { SORT } from "./cityAction";
var init={
    city:[]
}

export const cityReducer=(store=init,{type,payload})=>{
    switch(type)
    { 
        case SORT:return {
          ...store,
          city: [...store.city].sort((a, b) =>
            payload[1] === "asc"
              ? a[payload[0]] > b[payload[0]]
                ? 1
                : a[payload[0]] < b[payload[0]]
                ? -1
                : 0
              : a[payload[0]] < b[payload[0]]
              ? 1
              : a[payload[0]] > b[payload[0]]
              ? -1
              : 0
          ),
        };
        case ADDCITY:return {...store,city:payload}
        default:return {...store}
    }
}