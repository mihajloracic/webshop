initMap();
var myLocation;

function initMap() {

    var directionsService = new google.maps.DirectionsService();

    directionsDisplay = new google.maps.DirectionsRenderer();

    // Create a map object and specify the DOM element for display.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        myLocation = {
            lat: 45.254914,
            lng: 19.844642
        };
    }

    function showPosition(position) {
        myLocation = position;
    }
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: new google.maps.LatLng(45.254914, 19.844642),
        zoom: 14,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    marker1 = new google.maps.Marker({
        title: "Cveceara cvece",
        position: new google.maps.LatLng(45.234714, 19.844642),
        map: map
    });
    marker2 = new google.maps.Marker({
        title: "Cveceara cvece",
        position: new google.maps.LatLng(45.264714, 19.834642),
        map: map
    });
    marker3 = new google.maps.Marker({
        title: "Cveceara cvece",
        position: new google.maps.LatLng(45.254714, 19.845642),
        map: map
    });
    marker4 = new google.maps.Marker({
        title: "Cveceara cvece",
        position: new google.maps.LatLng(45.234714, 19.833642),
        map: map
    });
    marker5 = new google.maps.Marker({
        title: "Cveceara cvece",
        position: new google.maps.LatLng(45.254914, 19.858642),
        map: map
    });
    marker1.addListener('click', function() {
        var start = new google.maps.LatLng(myLocation.coords.latitude,myLocation.coords.longitude);
        var end = marker1.position;
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.WALKING
        };
        directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
        });
    });
    marker2.addListener('click', function() {
        var start = new google.maps.LatLng(myLocation.coords.latitude,myLocation.coords.longitude);
        var end = marker2.position;
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.WALKING
        };
        directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
        });
    });
    marker3.addListener('click', function() {
        var start = new google.maps.LatLng(myLocation.coords.latitude,myLocation.coords.longitude);
        var end = marker3.position;
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.WALKING
        };
        directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
        });
    });
    marker4.addListener('click', function() {
        var start = new google.maps.LatLng(myLocation.coords.latitude,myLocation.coords.longitude);
        var end = marker4.position;
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.WALKING
        };
        directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
        });
    });
    marker5.addListener('click', function() {
        var start = new google.maps.LatLng(myLocation.coords.latitude,myLocation.coords.longitude);
        var end = marker5.position;
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.WALKING
        };
        directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
        });
    });
    directionsDisplay.setMap(map);
    marker1.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker4.setMap(map);
    marker5.setMap(map);
}
$(document).ready(function() {

});
