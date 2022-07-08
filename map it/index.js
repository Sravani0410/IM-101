
 //let mapContainer=document.getElementById("map");
// function displayMap(){
//     mapContainer.innerHTML=`<iframe
//     width="600"
//     height="450"
//     style="border:0"
//     loading="lazy"
//     allowfullscreen
//     referrerpolicy="no-referrer-when-downgrade"
//     src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAovbVD6E67jDwmFEgHG_ufeAIgFGFcmfk
//       &q=Delhi">
//   </iframe>`;
//  } 
//  displayMap()

// function displayMap(place="Delhi"){
//     mapContainer.innerHTML=`<iframe
//     width="600"
//     height="450"
//     style="border:0"
//     loading="lazy"
//     allowfullscreen
//     referrerpolicy="no-referrer-when-downgrade"
//     src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCV-im_l-AEXmGhpSytEhqMOf2Gy6dB80g
//       &q=${place}">
//   </iframe>`;
//  }
//  displayMap();  

// let mapContainer=document.getElementById("map");
// function displayMap(params={
//    q:"Delhi",
// }){
//    mapContainer.innerHTML=`<iframe
//    width="600"
//    height="450"
//    style="border:0"
//    loading="lazy"
//    allowfullscreen
//    referrerpolicy="no-referrer-when-downgrade"
//    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCV-im_l-AEXmGhpSytEhqMOf2Gy6dB80g
//    ${checkParams(params)}
//      ">
//  </iframe>`;
// }
// function checkParams(params){
//  let str=``;
//  for(let key in params){
//     str=str+"&"+key+"="+params[key];
//  }
//  return str;
// }
// displayMap();

// window.initMap = function () {
//     // JS API is loaded and available
//     const delhi = { lat: 28.7041, lng: 77.1025 }
//     const zoom=14;
//     map = new google.maps.Map(document.getElementById("map"), {
//       center: delhi,
//       zoom: zoom,
//     });
//   };
//   document.getElementById("map")

// window.initMap = function () {
//     const delhi = { lat: 28.7041, lng: 77.1025 }
//     let map = new google.maps.Map(document.getElementById("map"), {
//       center: delhi,
//       zoom: 15,
//     });
//     const marker = new google.maps.Marker({
//       position: delhi,
//       map,
//     });
//   };

var locations = [
    ["Delhi", 28.6341, 77.2025, 4],
    ["Gurugram", 28.4595, 77.0266, 5],
    ["Ghaziabad", 28.6692, 77.4538, 3],
];

var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: new google.maps.LatLng(28.6041, 77.3025),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
    });

    google.maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            };
        })(marker, i)
    );
}

  