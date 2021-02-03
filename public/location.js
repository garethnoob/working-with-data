// create leaflet map object and set view and Zoom and pass id of div elememt in html
let startLat = 48.858372;
let startLon = 2.294481;
const myMap = L.map('mapid').setView([startLat, startLon], 10);
const myMarker = L.marker([startLat, startLon]).addTo(myMap); // initialize marker at lat 0 lon 0 and chain add to myMap

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'; //add attribution for use of tiles
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; // url used to get tiles
const tiles = L.tileLayer(tileUrl, { attribution }); // create tile layer adding tileurl and attribution as object as you can add other attributes and creat an attribution object
tiles.addTo(myMap); // add all to myMap
    

// callback function to add mylocation to map
const plot = location => {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    myMap.setView([lat, lon]);
    myMarker.setLatLng([lat,lon]);
    document.getElementById('lat').textContent = lat;
    document.getElementById('lon').textContent = lon;
}

const getLocation = () => {
    if('geolocation' in navigator) {
        console.log('location available');
        navigator.geolocation.getCurrentPosition(plot);
        } else {
        console.log('location unavailable');
    }
}


