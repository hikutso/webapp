console.log('Client side javascript file is loaded!')
function initMap() {
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('weather api fethched')

    const location = search.value


    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
         var   lati=data.latitude
         var   longi=data.longitude

            var map;
      
        console.log('connected')
        
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lati, lng: longi},
          zoom: 15
        });
      

        })
    })
})
}


function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    
    mapLink.href = '';
    mapLink.textContent = '';
    
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
    
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;


      var marker = new google.maps.Marker({position: uluru, map: map});
      var uluru = {lat: latitude, lng:longitude}
      var map;
      
      console.log('connected')
     
      
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 15

      });
    }
    
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
    
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
    
    }
    
    document.querySelector('#find-me').addEventListener('click', geoFindMe);
        