document.getElementById('test').textContent = "the test worked";


    



if('geolocation' in navigator) {
    console.log('location available');
    } else {
    console.log('location unavailable');
    }

const plot = location => {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const myMap = L.map('mapid').setView([lat, lon], 10);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(myMap);
    }

navigator.geolocation.getCurrentPosition(plot(location));
