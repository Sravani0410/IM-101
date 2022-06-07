// API:https://www.themealdb.com/api/json/v1/1/search.php?f=a

const getData = async() => {
    try{
        let input = document.getElementById("input").value
        console.log('input', input)

        let result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
        let data = await result.json();
        console.log('data', data)

        appendData(data.meals)

    } catch(error) {
        console.log('error', error)

    }
}


const callbyfunc = (func, delay) => {
    let timer;

    return function () {
       let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, args);
        }, delay)
    }
}

const searchData = callbyfunc(getData, 500);



const appendData = (data) => {
    let DisplayDiv = document.getElementById("Display");
    DisplayDiv.innerHTML = null;
    DisplayDiv.style.display = "block";
    console.log(DisplayDiv)
    data.map((el) => {
        let Div = document.createElement("div");
    
        var image = document.createElement("img");
         Div.innerHTML = el.strMeal;
         image.src=el.strMealThumb

         
        

        DisplayDiv.append(Div,image);
    })
}
