jQuery(function ($) {
    function init_map1() {
        var myLocation = new google.maps.LatLng(45.835557, 27.434455);
        var mapOptions = {
            center: myLocation,
            zoom: 16
        };
        var marker = new google.maps.Marker({
            position: myLocation,
            title: "Property Location"
        });
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        marker.setMap(map);
    }
    init_map1();
});
