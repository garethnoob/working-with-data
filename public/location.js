document.getElementById('test').textContent = "the test worked";

const getLocation =  () => {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
    } )
}


if('geolocation' in navigator) {
    console.log('location available');
    getLocation();
    } else {
        console.log('location unavailable');
    }

