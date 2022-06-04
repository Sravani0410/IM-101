import {useSelector,useDispatch} from "react-redux"
import { useState } from "react";
import { postCity } from "../../redux/city/cityAction";



export const City=()=>{
    const [city, setCity] = useState({});
    const dispatch = useDispatch();
    const getInput = (e) => {
    const {name,value}=e.target
      setCity({...city,[name]:value})
    };

console.log(city,"cityyyyyy")
    const handle=(e)=>{
     e.preventDefault()
     dispatch(postCity(city))
    } 

    console.log(city)
    const country=useSelector((store)=>store.country.country)
    console.log(country,"coutry")
    return (
      <div>
        <form onSubmit={handle}>
          <input
            onChange={getInput}
            type="text"
            name="city_name"
            id=""
            placeholder="Enter city"
          />
          <input
            onChange={getInput}
            type="text"
            name="population"
            id=""
            placeholder="Enter Population"
          />
          <select onChange={getInput} name="countryId" id="">
            
            {country.map((e) => {
              return <option value={e._id}>{e.country_name}</option>;
            })}
          </select>
          <input value="addCity" type="submit" name="" id="" />
        </form>
      </div>
    );
}