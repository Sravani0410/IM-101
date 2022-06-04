import "./NavBar.css"
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
export const NavBar=()=>{
    const country=useSelector((store)=>store.country.country)
    //console.log(country,"coutry")
    return (
      <div className="nav">
        <Link to="/">
          <button className="home" >Home</button>
        </Link>
        <Link to="/add-city">
          <button className="city">Add City</button>
        </Link>
        <Link to="add-country">
          <button className="country">Add Country</button>
        </Link>
      </div>
    );
}