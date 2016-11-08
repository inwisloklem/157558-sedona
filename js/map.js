function initMap() {
  var locationSedona = {lat: 34.865969, lng: -111.763604};
  var mapOptions = {
    center: new google.maps.LatLng(locationSedona),
    zoom: 10,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(document.getElementById("map-wrapper"), mapOptions);

  var marker = new google.maps.Marker({
    position: locationSedona,
    map: map,
    title: "Sedona"
  });
}

google.maps.event.addDomListener(window, 'load', initMap);
