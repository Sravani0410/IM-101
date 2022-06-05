// let mapContainer=document.getElementById("map");

// function displayMap(){
//     mapContainer.innerHTML=`<iframe
//     width="600"
//     height="450"
//     style="border:0"
//     loading="lazy"
//     allowfullscreen
//     referrerpolicy="no-referrer-when-downgrade"
//     src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAovbVD6E67jDwmFEgHG_ufeAIgFGFcmfk&q
//       &q=${CITY}">
//   </iframe>`;
//  } 

 var iframe=document.querySelector("#gmap_canvas")

const displayMap=()=>{
    var name=document.querySelector(".city").value;
    iframe.src=`https://maps.google.com/maps?q=${name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}