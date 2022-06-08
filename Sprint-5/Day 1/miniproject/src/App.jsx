import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import {Product} from "./components/product"
import {Routes,Route} from "react-router-dom";
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
     <Routes>
       <Route path="/" element={
        <>
         <Product props={product}/>
         </>
       }>
         
       </Route>
     </Routes>
    
    </div>
  );
}

export default App;
