function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longotude;
}

function onGeoError() {
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)