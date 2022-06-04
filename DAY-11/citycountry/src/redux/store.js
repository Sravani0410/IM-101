
import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import { cityReducer } from "./city/cityReducer"
import { countryReducer } from "./country/countryReducer"

import thunk from "redux-thunk"
const rootreducer=combineReducers({
    city:cityReducer,
    country:countryReducer
})


export const store=legacy_createStore(rootreducer, applyMiddleware(thunk) )
