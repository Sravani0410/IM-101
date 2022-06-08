import "./product.css"
import {useEffect, useState} from "react"
import axios from "axios"
import {useSearchParams} from "react-router-dom"
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { getProductData } from "../connection/Route"
export const Product=({props})=>{

    console.log(props)
    const [product,setProduct]=useState([]);
    const [searchParams,setSearchParams]=useSearchParams();
    const [page, setPage] = useState(+(searchParams.get("page") || 1));
    const [sort, setSort] = useState("");
    const [filter, setFilter] = useState("");
    useEffect(()=>{
        axios({
           url:getProductData,
           method:'GET',
           params:{
               page,filter,sort
           }
        })
        .then((res)=>{
              console.log("res:",res.product);
              setProduct(res.product.Product)
        })
    },[page,sort,filter])

    useEffect(() => {
        setSearchParams({
            ...searchParams,
            page,
            filter,
            sort,
        })
    },[page,sort,filter, setSearchParams])
    return(
        <div>
            <div>
                <select onChange={(event)=>{
                    setSort(event.target.value);
                }}>
                    <option value="">sort by price</option>
                    <option value="dec">high to low</option>
                    <option value="asc">low to high</option>
                </select>
                <select name="" id="" onChange={(event)=>{
                    setFilter(event.target.value);
                }}>
                    <option value="">Filter by size</option>
                    <option value="x">X</option>
                    <option value="xl">XL</option>
                    <option value="l">L</option>
                </select>
            </div>
            <div>
                
            </div>
        <div className="container">
    {props.map((el,i)=>{
        return (
            <div key={i+1} >
                <div><img className="img" src={el.img} alt="image"/></div>
                <div><h2>{el.title}</h2></div>
                <div><h3>Rs-{el.price}</h3></div>
                <div><h3>{el.color}</h3></div>
                <div><h3>{el.size}</h3></div>
            </div>
        )
    })
}
</div>
<Pagination onChange={(event) => {
                    console.log("pagination :", event.currentTarget.textContent);
                    setPage(event.currentTarget.textContent);
                } }defaultCurrent={1} total={5} />

      </div>  
    )
}