import { useEffect ,useState} from "react"
import { useDispatch,useSelector } from "react-redux";
import { deleteCity, getCity } from "../../redux/city/cityAction";
import { getCountry } from "../../redux/country/countryAction";
import { Sort } from "../SortFilter/sort";
import "./Home.css"
export const Home=()=>{
    const [filter,setFilter]=useState("")
    const dispatch = useDispatch();
    const city=useSelector((store)=>store.city.city)
    console.log(city)
    useEffect(()=>{
         dispatch(getCountry())
         dispatch(getCity()) 
    },[])
    return <div className="table">
        <br /><br />
        <input onChange={(e)=>{setFilter(e.target.value)}} type="text" placeholder="filter by country" name="" id="" />
        <Sort/>
        <br />
        <br />
       <table>
           <thead>
               <tr>
                   <th>S.No</th>
                   <th>Country</th>
                   <th>City</th>
                   <th>Population</th>
                   <th>Edit</th>
                   <th>Delete</th>
               </tr>
           </thead>
           <tbody>
               {city.filter((e)=>e.countryId.country_name.includes(filter)).map((e,i)=>{
                  return <tr>
                          <td>{i+1}</td> 
                          <td>{e.countryId.country_name}</td>
                          <td>{e.city_name}</td>
                          <td>{e.population}</td>
                          <td><button>edit</button></td>
                          <td><button onClick={()=>{dispatch(deleteCity(e._id))}} >delete</button></td>
                   </tr>
               })}
           </tbody>
       </table>
    </div>
}