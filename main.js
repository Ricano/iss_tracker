const image = './iss.svg'
const iss = 'https://api.wheretheiss.at/v1/satellites/25544';

const mymap = L.map('issMap').setView([0, 0], 2);

const dot = L.icon({
    iconUrl: './dot.png',
    iconSize: [5, 5], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [2.5, 2.5], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0], // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});


const icon = L.icon({
    iconUrl: './iss.png',
    iconSize: [379, 230], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [180, 228], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0], // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});

const marker = L.marker([0, 0], {
    icon: icon
}).addTo(mymap);
const url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
L.tileLayer(url, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);



function addTrail(lat, lon) {
    L.marker([lat, lon], {
        icon: dot
    }).addTo(mymap);

}

async function getImage() {

    const response = await fetch(image);
    const imageBlob = await response.blob();
    document.getElementById('iss_svg').src = URL.createObjectURL(imageBlob);

}

async function getISS() {

    const response = await fetch(iss);

    console.log(response);

    const data = await response.json();
    const lat = data.latitude
    const lon = data.longitude
    const vel = data.velocity
    const latlng = L.latLng(lat, lon);
    marker.setLatLng(latlng)

    document.getElementById('lat').innerHTML = lat.toFixed(2) + '&deg'
    document.getElementById('lon').innerHTML = lon.toFixed(2) + '&deg'
    document.getElementById('vel').innerHTML = vel.toFixed(2) + ' km/h'

    addTrail(lat, lon);


    const postData = {
        lat: lat,
        lon: lon,
        vel: vel
    };
    const postRequest = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    }


    const serverResponse = await fetch('/', () => postRequest);
    const json = await serverResponse.json();
    console.log(json);
    console.log(Date.now.toString);

}
const interval = 3000;
getImage();


navigator.geolocation.getCurrentPosition(position=>{
    const lat_user = position.coords.latitude;
    const lon_user = position.coords.longitude;
   addTrail(lat_user, lon_user)
})



setInterval(getISS, interval);