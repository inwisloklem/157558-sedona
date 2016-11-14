var searchFormBtn = document.querySelector(".search-form-btn");
var modalForm = document.querySelector(".modal-form");
var counterLess = modalForm.querySelectorAll(".form-counter-less");
var counterMore = modalForm.querySelectorAll(".form-counter-more");
var inputs = modalForm.querySelectorAll(".form-counter-wrapper input");

modalForm.classList.add("modal-form-hide");

searchFormBtn.addEventListener("click", function(event) {
  event.preventDefault();

  modalForm.classList.toggle("modal-form-hide");
});

modalForm.addEventListener("submit", function(event) {
  if(inputs[0].value < 1) {
    event.preventDefault();

    alert("Необходимо выбрать минимум одного взрослого.");
  }
});

for (var i = 0; i < inputs.length; i++) {
  (function(i) {
    counterLess[i].addEventListener("click", function(event) {
      event.preventDefault();

      if (inputs[i].value > 0) {
        inputs[i].value = --inputs[i].value;
      }
    });
    counterMore[i].addEventListener("click", function(event) {
      event.preventDefault();

      inputs[i].value = ++inputs[i].value;
    });
  }(i));
}

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
