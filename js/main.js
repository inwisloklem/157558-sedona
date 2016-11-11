function initMap() {
  var locationSedona = {lat: 34.865969, lng: -111.763604};
  var mapOptions = {
    center: new google.maps.LatLng(locationSedona),
    zoom: 10,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(document.querySelector("#map-wrapper"), mapOptions);

  var marker = new google.maps.Marker({
    position: locationSedona,
    map: map,
    title: "Sedona"
  });
}

google.maps.event.addDomListener(window, 'load', initMap);

var searchFormBtn = document.querySelector(".search-form-btn");
var modalForm = document.querySelector(".modal-form");

modalForm.classList.add("modal-form-hide");

searchFormBtn.addEventListener("click", function(event) {
  event.preventDefault();

  modalForm.classList.toggle("modal-form-hide");
});
