//Circle

// In this example, we center the map, and add a marker, using a LatLng object
// literal instead of a google.maps.LatLng object. LatLng object literals are
// a convenient way to add a LatLng coordinate and, in most cases, can be used
// in place of a google.maps.LatLng object.
const citymap = {
    Lucknow: {
      center: { lat: 29.9457, lng: 78.1642 },
      population: 2714856,
    },
    Delhi: {
      center: { lat:28.679079, lng: 77.069710},
      population: 8405837,
    }
  };
let map;

var allSocities;
var allMohalla;
var circles = [];
var mapMarker = [];
function initMap() {
    // Create the map.
     map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: 29.450758, lng: 77.315208 },
    });
  
    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    for (const city in citymap) {
        console.log(citymap[city].center,'center value')
      // Add the circle for this city to the map.
    const   cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        editable: true,
        draggable: true,
        map,
        center: citymap[city].center,
        radius:25*1000,
      });
      circles.push(cityCircle);
      cityCircle.addListener("click", (ev,r) => {
        let latRad = cityCircle.center.lat();
        let lngRad= cityCircle.center.lng();

          var pyrmont = new google.maps.LatLng(parseFloat(latRad),parseFloat(lngRad));

          var request = {
            location: pyrmont,
            radius:  cityCircle.getRadius(),
            keyword:'apartment'
          };

          var requestTwo = {
            location: pyrmont,
            radius:  cityCircle.getRadius(),
            keyword:'locality'
          };

          service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, callback);

          serviceTwo = new google.maps.places.PlacesService(map);
          serviceTwo.nearbySearch(requestTwo, callbackTwo);
          const marker = new google.maps.Marker({
            position: pyrmont,
            map: map,
          });
          mapMarker.push(marker);
          const infowindow = new google.maps.InfoWindow({
            content: `<p>Marker Location: ${marker.getPosition()} <input type='checkbox' value=${JSON.stringify(request)} name="circle" /> </p>`,
          });
          infowindow.open(map, marker);

              });
              


    }
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
     console.log(results,'results');
    // optionArray =results;
     showCities(results)
    }
}  

function callbackTwo(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
     console.log(results,'results two');
    // optionArray =results;
     showArea(results)
    }
} 
  function createCircle(){
   const  cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        editable: true,
        draggable: true,
        map,
        center: {lat: 29.679079, lng: 79.069710},
        radius: 50*1000, //this is in meter
      });
      circles.push(cityCircle);

      cityCircle.addListener("click", (ev) => {
        console.log(cityCircle.center.lat(),'circle radius ############################');
 
        let latRad = cityCircle.center.lat();
        let lngRad= cityCircle.center.lng();

          var pyrmont = new google.maps.LatLng(parseFloat(latRad),parseFloat(lngRad));

          var request = {
            location: pyrmont,
            radius:  cityCircle.getRadius(),
            keyword:'apartment'
          };

          var requestTwo = {
            location: pyrmont,
            radius:  cityCircle.getRadius(),
            keyword:'locality'
          };
          console.log(request,'request going');
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);

        serviceTwo = new google.maps.places.PlacesService(map);
        serviceTwo.nearbySearch(requestTwo, callbackTwo);
        const marker = new google.maps.Marker({
            position: pyrmont,
            map: map,
          });
          mapMarker.push(marker);
          const infowindow = new google.maps.InfoWindow({
            content: `<p>Marker Location: ${marker.getPosition()} <input type='checkbox' value=${JSON.stringify(request)} name="circle" /> </p>`,
          });
          infowindow.open(map, marker);
      });
  }

function   showArea(optionArray){
    var s3 = document.getElementById('slct3');
   
    if(s3) {
        s3.innerHTML = '';
        for (var option in optionArray) {
            if (optionArray.hasOwnProperty(option)) {
                var pair = optionArray[option]['name'];
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = 'listingItem';
                checkbox.id = pair;
                checkbox.value = JSON.stringify( optionArray[option]['geometry']['location']);
                s3.appendChild(checkbox);      
                var label = document.createElement('label')
                label.htmlFor = pair;
                label.appendChild(document.createTextNode(pair));     
                s3.appendChild(label);
                s3.appendChild(document.createElement("br"));    
            }
        }

    }
  
}
function   showCities(optionArray){

    var s2 = document.getElementById('slct2');
    if(s2) {
        s2.innerHTML = '';
        for (var option in optionArray) {
            if (optionArray.hasOwnProperty(option)) {
                var pair = optionArray[option]['name'];
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = 'listingItem';
                checkbox.id = pair;
                checkbox.value = JSON.stringify( optionArray[option]['geometry']['location']);
                s2.appendChild(checkbox); 
                var label = document.createElement('label')
                label.htmlFor = pair;
                label.appendChild(document.createTextNode(pair));
                s2.appendChild(label);
                s2.appendChild(document.createElement("br"));    
            }
        }

    }
  
}   


function directionRenderer(){
    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
   
    directionsRenderer.setMap(map);

    for (var checkbox of markedCheckbox) {
        calculateAndDisplayRoute(checkbox.value,directionsService, directionsRenderer) ;

    }
   
}



function calculateAndDisplayRoute(end,directionsService, directionsRenderer) {
    console.log( JSON.parse(JSON.stringify(end)),'lat value');
   // console.log(end.lng(),'lng value');
  // let finalDes = end.split(',');
  directionsService.route({
       // origin: { lat: 28.457523, lng: 77.026344 },ChIJn1wl6jAYDTkR6A4OqgI1Hb0
       origin: { 'placeId': 'ChIJn1wl6jAYDTkR6A4OqgI1Hb0'},
       // destination: { lat: parseFloat(finalDes[0]), lng: parseFloat(finalDes[1])},
       destination: { 'placeId': end},
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives:true
    }).then((response) => {
        directionsRenderer.setDirections(response);
        console.log(response,'response');
        const route = response.routes[0];
  const summaryPanel = document.getElementById("directions-panel");
  summaryPanel.innerHTML = "";

  // For each route, display summary information.
  for (let i = 0; i < route.legs.length; i++) {
    const routeSegment = i + 1;
    summaryPanel.innerHTML +=
      "<b>Route Segment: " + routeSegment + "</b><br>";
    summaryPanel.innerHTML += route.legs[i].start_address + " to ";
    summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
    summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
  }
      })
      .catch((e) => console.log("Directions request failed due to " + status+ e)); 
    
  }


  function allSociety(){
     allSocities=[];
     allMohalla=[];
     
     var arrMarkMail = document.getElementsByName("circle");
     for (var i = 0; i < arrMarkMail.length; i++) {
       apiCall(JSON.parse(arrMarkMail[i].value))
     }

   setTimeout(()=>{
    showCities(allSocities);
    showArea(allMohalla);
   },1000);
   
  }

  function apiCall(request){
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callbackAll);
    let reqTwo = JSON.parse(JSON.stringify(request));
    reqTwo['keyword']='locality';
    service.nearbySearch(reqTwo, callbackAlltwo);
   
  }


 function callbackAll(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    results.forEach(element => {
        allSocities.push(element);
    });
    

    }
}  

  function callbackAlltwo(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    // optionArray =results;
    results.forEach(element => {
        allMohalla.push(element);
    });
   
}
}


function multiPathGet(){
    var lat_lng = new Array();
  //  cityCircle.setMap(null);
  lat_lng.push( new google.maps.LatLng(28.4595,77.0266));
         var arrMarkMailCheck = document.getElementsByName("listingItem");
         for (var i = 0; i < arrMarkMailCheck.length; i++) {
             if(arrMarkMailCheck[i].checked){
                var data = JSON.parse(arrMarkMailCheck[i].value);
                var myLatlng = new google.maps.LatLng(data.lat, data.lng);
                lat_lng.push(myLatlng);
             }
           
        }
        lat_lng.push( new google.maps.LatLng(28.4595,77.0266));

               //***********ROUTING****************//
 
        //Initialize the Path Array
 
        //Initialize the Direction Service
        var service = new google.maps.DirectionsService();
 
        //Set the Path Stroke Color 
        //Loop and Draw Path Route between the Points on MAP
        for (var i = 0; i < lat_lng.length; i++) {
            if ((i + 1) < lat_lng.length) {
                var src =  lat_lng[i];        
                var des = lat_lng[i+1];
                console.log(i,'value of i');
                var myMarker = new google.maps.Marker({
                    position: lat_lng[i],
                });
                myMarker.setMap(map);
                //  poly.setPath(path);
                service.route({
                  origin: src,
                  destination: des,
                  travelMode: google.maps.DirectionsTravelMode.DRIVING
                }, function(result, status) {
                  if (status == google.maps.DirectionsStatus.OK) {
                    var path = new google.maps.MVCArray();
                    var poly = new google.maps.Polyline({
                      map: map,
                      strokeColor: '#F3443C'
                    });
                    for (var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
                      path.push(result.routes[0].overview_path[i]);
                    }
                    poly.setPath(path);
                  }
                });
              }

            
        }
        removeCircle()
}


function removeCircle(){
    for(var i in circles) {
        circles[i].setMap(null);
      }
      circles = [];

      for(var i in mapMarker) {
        mapMarker[i].setMap(null);
      }
      mapMarker = [];
}