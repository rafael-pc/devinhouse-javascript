let map;

// let jsonUrl = "https://amapalanches.com/includes/v1/getTodas.php";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    // center: { lat: -34.397, lng: 150.644 },
    zoom: 20,
  });
  myLocation();
}


function myLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const marker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: "mario.gif",
        });
        map.setCenter(pos);
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
