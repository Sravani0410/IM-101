import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import {Product} from "./components/product"
function App() {
  const [product,setProduct]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3012/product")
    .then((d)=>d.json())
    .then((data)=>{
      setProduct(data);
    })
  },[])
  return (
    <div className="App">
     {/* hello
     {
       product.map((product)=>(
         <div>
            <div>{product.title}</div>
            <div>{product.img}</div>
            <div>{product.price}</div>
            
         </div>
        
       ))
     } */}
     <Product props={product}/>
    </div>
  );
}

export default App;
