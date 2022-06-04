
import { useDispatch, useSelector } from "react-redux";
import { sort } from "../../redux/city/cityAction";
export const Sort=()=>{
    const dispatch=useDispatch()
   // const todo=useSelector((store)=>store.todo.todo)
    
    return (
      <div>
        <select
          onChange={(e) => {
            var val = document.getElementById("ascdes").value;
            dispatch(sort([e.target.value, val]));
          }}
          name="by"
          id="by"
        >
          <option value="city_name">city</option>
          <option value="population">population</option>
          {/* <option value="id">id</option> */}
          {/* <option value="country_name">country</option> */}
        </select>

        <select
          onChange={(e) => {
            let val = document.getElementById("by").value;
            dispatch(sort([val, e.target.value]));
          }}
          name="ascdes"
          id="ascdes"
        >
          <option value="asc">ascending</option>
          <option value="des">descending</option>
        </select>
      </div>
    );
}