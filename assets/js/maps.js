function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    let labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    let locations = [{
        lat: 53.4084,
        lng: -2.9916
    }, {
        lat: 50.71429,
        lng: -1.98458
    }, {
        lat: 41.3851,
        lng: 2.1734
    }
    ];

    let markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    let markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}