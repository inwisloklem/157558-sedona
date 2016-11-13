var searchFormBtn = document.querySelector(".search-form-btn");
var modalForm = document.querySelector(".modal-form");

modalForm.classList.add("modal-form-hide");

searchFormBtn.addEventListener("click", function(event) {
  event.preventDefault();

  modalForm.classList.toggle("modal-form-hide");
});

var counterLess = modalForm.querySelectorAll(".form-counter-less");
var counterMore = modalForm.querySelectorAll(".form-counter-more");
var inputAdults = modalForm.querySelector("input[name=\"adults\"]");
var inputChildren = modalForm.querySelector("input[name=\"children\"]");

counterLess[0].addEventListener("click", function(event) {
  event.preventDefault();

  if (inputAdults.value > 0) {
    inputAdults.value = --inputAdults.value;
  }
});

counterMore[0].addEventListener("click", function(event) {
  event.preventDefault();

  inputAdults.value = ++inputAdults.value;
});

counterLess[1].addEventListener("click", function(event) {
  event.preventDefault();

  if (inputChildren.value > 0) {
    inputChildren.value = --inputChildren.value;
  }
});

counterMore[1].addEventListener("click", function(event) {
  event.preventDefault();

  inputChildren.value = ++inputChildren.value;
});

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
