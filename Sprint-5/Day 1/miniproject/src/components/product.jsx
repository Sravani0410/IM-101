import "./product.css"

export const Product=({props})=>{

    console.log(props)

    return(
        <div>
            <div>
                <select>
                    <option value="">sort by price</option>
                    <option value="dec">high to low</option>
                    <option value="asc">low to high</option>
                </select>
                <select name="" id="">
                    <option value="">Filter by size</option>
                    <option value="x">X</option>
                    <option value="xl">XL</option>
                </select>
            </div>
            <div>
                
            </div>
        <div className="main">
    {props.map((el,i)=>{
        return (
            <div key={i} >
                <div><img src={el.img} alt="image"/></div>
                <div><h2>{el.title}</h2></div>
                <div><h3>Rs-{el.price}</h3></div>
                <div><h3>{el.color}</h3></div>
                <div><h3>{el.size}</h3></div>
            </div>
        )
    })
}
</div>
      </div>  
    )
}