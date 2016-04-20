function myLocation(){	navigator.geolocation.getCurrentPosition(locationFound);
	}
	function locationFound(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
       var locationUrl = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&sensor=true";
        window.location.href = locationUrl;
	}