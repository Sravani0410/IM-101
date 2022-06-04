import {useState} from 'react'
import {useDispatch} from  "react-redux"
import { postCountry } from '../../redux/country/countryAction';
 


export const Country = () => {
  const [country,setCountry]=useState("")
  const dispatch=useDispatch()
  const handle=(e)=>{
      e.preventDefault()
      dispatch(postCountry({country_name:country}))
  }
  console.log(country)
  return (
    <div>
      <form onSubmit={handle}>
        <input
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          type="text"
          placeholder="enter country"
        />
        <input type="submit" value="add Country"/>
       
      </form>
    </div>
  );
};