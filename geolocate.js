function geoLocate() {

    try {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const vel = position.coords.speed === null ? 0 : position.coords.speed;

            document.getElementById('latU').innerHTML = lat.toFixed(2) + '&deg';
            document.getElementById('lonU').innerHTML = lon.toFixed(2) + '&deg';
            document.getElementById('velU').innerHTML = vel.toFixed(2) + ' km/h';
        })
    } catch (error) {
        console.log(error);
    }
}

geoLocate()