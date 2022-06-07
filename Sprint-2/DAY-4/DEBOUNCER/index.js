// API:https://www.themealdb.com/api/json/v1/1/search.php?f=a

const getData= async()=>{
    try{
      let input=document.getElementsByClassName("input").value
      console.log(input)
    }
    catch(err){
        console.log(err.message)
    }
}



const appendData=(data)=>{
    let Div=document.getElementById("display");
    Div.innerHTML=null;
    Div.style.display="block";
    data.map((el)=>{
        let div=document.createElement("div")
        div.style.fontSize="20px";
        div.style.marginTop="10px";
        div.style.marginBottom="10px";
        div.innerHTML=el.strMeal;
        display.append(div);
    })
}